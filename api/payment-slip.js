const { randomUUID } = require("node:crypto");

const MAX_BODY_BYTES = 4.5 * 1024 * 1024;
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

async function readBody(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error("request_too_large");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(buffer);
  }

  return Buffer.concat(chunks);
}

function splitBuffer(buffer, separator) {
  const parts = [];
  let start = 0;
  let index = buffer.indexOf(separator);

  while (index !== -1) {
    parts.push(buffer.subarray(start, index));
    start = index + separator.length;
    index = buffer.indexOf(separator, start);
  }

  parts.push(buffer.subarray(start));
  return parts;
}

function parseDisposition(value) {
  const params = {};
  for (const match of value.matchAll(/;\s*([^=]+)="([^"]*)"/g)) {
    params[match[1].toLowerCase()] = match[2];
  }
  return params;
}

function parseMultipart(buffer, contentType) {
  const match = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!match) {
    const error = new Error("missing_boundary");
    error.statusCode = 400;
    throw error;
  }

  const boundary = Buffer.from(`--${match[1] || match[2]}`);
  const fields = {};
  const files = {};

  for (const rawPart of splitBuffer(buffer, boundary)) {
    let part = rawPart;
    if (!part.length || part.equals(Buffer.from("--\r\n")) || part.equals(Buffer.from("--"))) {
      continue;
    }
    if (part.subarray(0, 2).toString() === "\r\n") {
      part = part.subarray(2);
    }
    if (part.subarray(-2).toString() === "\r\n") {
      part = part.subarray(0, -2);
    }
    if (part.subarray(-2).toString() === "--") {
      part = part.subarray(0, -2);
    }

    const headerEnd = part.indexOf(Buffer.from("\r\n\r\n"));
    if (headerEnd === -1) {
      continue;
    }

    const headerLines = part.subarray(0, headerEnd).toString("utf8").split("\r\n");
    const headers = {};
    for (const line of headerLines) {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) {
        continue;
      }
      headers[line.slice(0, separatorIndex).toLowerCase()] = line.slice(separatorIndex + 1).trim();
    }

    const disposition = headers["content-disposition"] || "";
    const params = parseDisposition(disposition);
    const name = params.name;
    if (!name) {
      continue;
    }

    const content = part.subarray(headerEnd + 4);
    if (params.filename) {
      files[name] = {
        filename: params.filename.replace(/[^\w.\- ()]/g, "_").slice(0, 120) || "payment-slip",
        contentType: headers["content-type"] || "application/octet-stream",
        buffer: content
      };
    } else {
      fields[name] = content.toString("utf8").trim();
    }
  }

  return { fields, files };
}

function clean(value, maxLength) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isAllowedOrigin(request) {
  const origin = request.headers.origin;
  if (!origin) {
    return true;
  }

  const allowedOrigins = (process.env.PAYMENT_ALLOWED_ORIGINS || "https://echtit.vercel.app,http://localhost:5173,http://127.0.0.1:5173")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return allowedOrigins.includes(origin);
}

async function sendTelegram(method, formData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    body: formData
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok || payload.ok !== true) {
    throw new Error("telegram_send_failed");
  }
}

async function sendSlipToTelegram({ requestId, fields, file, request }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    const error = new Error("service_not_configured");
    error.statusCode = 503;
    throw error;
  }

  const name = clean(fields.name, 80);
  const host = clean(request.headers.host, 120);
  const expectedAmount = clean(process.env.PAYMENT_EXPECTED_AMOUNT || "150 THB", 40);

  const message = [
    "Paid User payment slip",
    `Request ID: ${requestId}`,
    `Name: ${name}`,
    `Expected amount: ${expectedAmount}`,
    `Source: ${host}`,
    `Time: ${new Date().toISOString()}`
  ].join("\n");

  const messageForm = new FormData();
  messageForm.append("chat_id", chatId);
  messageForm.append("text", message);
  messageForm.append("disable_web_page_preview", "true");
  await sendTelegram("sendMessage", messageForm);

  const fileForm = new FormData();
  fileForm.append("chat_id", chatId);
  fileForm.append("caption", `Slip for ${name} (${requestId})`);
  fileForm.append(file.contentType === "image/webp" ? "document" : "photo", new Blob([file.buffer], { type: file.contentType }), file.filename);
  await sendTelegram(file.contentType === "image/webp" ? "sendDocument" : "sendPhoto", fileForm);
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { ok: false, error: "method_not_allowed" });
    return;
  }

  if (!isAllowedOrigin(request)) {
    sendJson(response, 403, { ok: false, error: "forbidden_origin" });
    return;
  }

  try {
    const body = await readBody(request);
    const { fields, files } = parseMultipart(body, request.headers["content-type"] || "");
    const requestId = randomUUID();

    if (fields.website) {
      sendJson(response, 200, { ok: true, requestId });
      return;
    }

    const name = clean(fields.name, 80);
    const slip = files.slip;

    if (!name || !slip) {
      sendJson(response, 400, { ok: false, error: "missing_required_fields" });
      return;
    }

    if (!ALLOWED_IMAGE_TYPES.has(slip.contentType)) {
      sendJson(response, 415, { ok: false, error: "unsupported_slip_type" });
      return;
    }

    if (slip.buffer.length > MAX_FILE_BYTES) {
      sendJson(response, 413, { ok: false, error: "slip_too_large" });
      return;
    }

    await sendSlipToTelegram({ requestId, fields, file: slip, request });
    sendJson(response, 200, { ok: true, requestId });
  } catch (error) {
    const statusCode = Number(error.statusCode) || 500;
    const publicError = error.message === "service_not_configured" ? "service_not_configured" : statusCode >= 500 ? "submit_failed" : error.message || "request_failed";
    sendJson(response, statusCode, { ok: false, error: publicError });
  }
};
