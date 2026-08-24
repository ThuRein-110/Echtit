document.documentElement.classList.add("js");

const translations = {
  en: {
    navCourse: "Course",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",
    navEnroll: "Enroll",
    heroEyebrow: "Cybersecurity Learning",
    heroTitle: "Echtit. Practice first.",
    heroText: "Courses, writeups, videos.",
    heroCourseButton: "Current course",
    heroWorkLink: "Selected work",
    metricCourse: "Current paid course",
    metricWork: "Work previews",
    metricDelivery: "Telegram",
    courseStatus: "Now enrolling",
    courseEyebrow: "Course",
    courseTitle: "Steganography & CTF",
    courseText: "Stego, forensics, CTF workflow, and writeups.",
    priceLabel: "Early bird promotion",
    promoPrice: "400,000 Ks",
    regularPrice: "500,000 Ks",
    discountText: "Early bird: 20% off.",
    deliveryLabel: "Delivery",
    paymentLabel: "Payment",
    paymentValue: "Telegram inquiry",
    courseButton: "Inquire at @zalon123",
    currentCourseEyebrow: "Current Paid Course",
    courseSectionTitle: "Steganography & CTF.",
    courseLead: "Inspect. Extract. Write up.",
    courseFocusEyebrow: "Focus",
    courseOutcomeTitle: "Solve with process.",
    courseOutcomeText: "Evidence first. Tools second. Clean writeup last.",
    courseAccessButton: "Ask on Telegram",
    moduleOneTitle: "File Inspection",
    moduleOneText: "Signatures, metadata, strings, and clues.",
    moduleTwoTitle: "Image & Audio Stego",
    moduleTwoText: "Common hiding patterns and payloads.",
    moduleThreeTitle: "CTF Writeups",
    moduleThreeText: "From clue to flag to final report.",
    focusEyebrow: "What Echtit Does",
    focusTitle: "Courses, writeups, videos.",
    focusLead: "Only key updates. No clutter.",
    focusCoursesTitle: "Courses",
    focusCoursesText: "Focused practical learning.",
    focusWriteupsTitle: "Writeups",
    focusWriteupsText: "Short notes and walkthroughs.",
    focusVideosTitle: "Videos",
    focusVideosText: "Selected demos and tutorials.",
    servicesEyebrow: "Services",
    servicesTitle: "Private device control for your own tailnet.",
    servicesLead: "Personal Device Hub helps you manage your computers through Tailscale without using a public file relay.",
    serviceStatus: "Private beta",
    serviceTitle: "Personal Device Hub",
    serviceText: "Private Tailscale device hub for your own computers.",
    servicePriceLabel: "One-time down payment",
    servicePrice: "$10",
    servicePriceNote: "Tailscale is required. Pay once for private beta setup access.",
    paymentStepOne: "Install or open Tailscale first.",
    paymentStepTwo: "Click Ready to pay when you are prepared to scan.",
    paymentStepThree: "Send the payment slip on Telegram.",
    paymentStepFour: "After approval, receive your Hub URL and setup help.",
    paymentReadyButton: "Ready to pay",
    paymentReadyNote: "This guide explains the app. Private installers are sent after payment approval.",
    qrEyebrow: "Thai QR Payment",
    qrTitle: "Scan TrueMoney for the $10 down payment",
    qrText: "After payment, enter your name and upload the slip picture here. You do not need Telegram.",
    slipCheckTitle: "Slip review required",
    slipCheckText: "Access is approved only when the slip matches this TrueMoney account, the correct payment, and your name. Wrong or reused slips are denied.",
    copied: "Copied",
    serviceButton: "Ask before paying",
    downloadSetupGuide: "Download setup guide",
    buyerNameLabel: "Name",
    buyerNamePlaceholder: "Your name",
    slipImageLabel: "Payment slip picture",
    submitSlipButton: "Submit slip",
    submitSlipSending: "Sending slip...",
    submitSlipSuccess: "Slip sent. Wait for approval and your private install package.",
    submitSlipError: "Could not send the slip. Check the image and try again.",
    submitSlipNotConfigured: "Slip form is not connected yet. Message @zalon123 after payment.",
    submitSlipFileLarge: "Slip image must be 4 MB or smaller.",
    paidDeliveryNotice: "After approval, you receive the private install package and Hub setup link.",
    serviceLineOne: "Files stay inside your private Tailscale network.",
    serviceLineTwo: "Live Screen works with supported desktop agents.",
    serviceLineThree: "Bearer token auth and allowed-folder controls are built in.",
    serviceLineFour: "Phone browser access for dashboard, uploads, and downloads.",
    serviceFeatureOneTitle: "Private network first",
    serviceFeatureOneText: "Built for devices already connected through Tailscale, with no public agent endpoint required.",
    serviceFeatureTwoTitle: "Files and transfers",
    serviceFeatureTwoText: "Access configured folders and transfer files directly between your own devices.",
    serviceFeatureThreeTitle: "Live Screen",
    serviceFeatureThreeText: "Use a real desktop screen bridge on supported computers, with setup kept private to your tailnet.",
    workEyebrow: "Selected Work",
    workTitle: "A short preview from Echtit.",
    workLead: "A small sample. More later.",
    tagWriteup: "Writeup",
    tagVideo: "Video",
    wiresharkTitle: "Finding Sensitive Data in Wireshark",
    wiresharkText: "Find credential data in captured traffic.",
    browserTitle: "Browser Forensics",
    browserText: "Browser artifacts and history traces.",
    stegoVideoTitle: "Steganography File Hiding Demo",
    stegoVideoText: "A short steganography demo.",
    readWriteup: "Read writeup",
    readNote: "Read note",
    watch: "Watch",
    watchVideo: "Watch video",
    contactEyebrow: "Contact",
    contactTitle: "Ask about the course.",
    contactText: "Access and payment via Telegram.",
    contactButton: "Message @zalon123",
  },
  mm: {
    navCourse: "သင်တန်း",
    navServices: "Services",
    navWork: "လက်ရာများ",
    navContact: "ဆက်သွယ်ရန်",
    navEnroll: "စာရင်းသွင်းရန်",
    heroEyebrow: "Cybersecurity လေ့လာရေး",
    heroTitle: "Echtit. လက်တွေ့အဓိက။",
    heroText: "သင်တန်း၊ writeup၊ video။",
    heroCourseButton: "လက်ရှိသင်တန်း",
    heroWorkLink: "လက်ရာများ",
    metricCourse: "လက်ရှိ paid course",
    metricWork: "လက်ရာ preview",
    metricDelivery: "Telegram",
    courseStatus: "စာရင်းသွင်းနိုင်ပါပြီ",
    courseEyebrow: "သင်တန်း",
    courseTitle: "Steganography & CTF",
    courseText: "Stego၊ forensics၊ CTF workflow နှင့် writeup။",
    priceLabel: "Early bird promotion",
    promoPrice: "400,000 Ks",
    regularPrice: "500,000 Ks",
    discountText: "Early bird 20% လျှော့စျေး။",
    deliveryLabel: "ပို့ချမည့်နေရာ",
    paymentLabel: "ငွေပေးချေမှု",
    paymentValue: "Telegram တွင် မေးမြန်းရန်",
    courseButton: "@zalon123 တွင် မေးမြန်းရန်",
    currentCourseEyebrow: "လက်ရှိ Paid Course",
    courseSectionTitle: "Steganography & CTF.",
    courseLead: "စစ်ဆေး။ ထုတ်ယူ။ Writeup ရေး။",
    courseFocusEyebrow: "အဓိက",
    courseOutcomeTitle: "Process နဲ့ ဖြေရှင်းပါ။",
    courseOutcomeText: "Evidence အရင်။ Tool နောက်။ Writeup သပ်သပ်ရပ်ရပ်။",
    courseAccessButton: "Telegram မှ မေးရန်",
    moduleOneTitle: "File Inspection",
    moduleOneText: "Signature၊ metadata၊ strings၊ clue။",
    moduleTwoTitle: "Image & Audio Stego",
    moduleTwoText: "Hiding pattern နှင့် payload များ။",
    moduleThreeTitle: "CTF Writeups",
    moduleThreeText: "Clue မှ flag၊ report အထိ။",
    focusEyebrow: "Echtit လုပ်ဆောင်ချက်များ",
    focusTitle: "သင်တန်း၊ writeup၊ video။",
    focusLead: "အဓိက update များသာ။",
    focusCoursesTitle: "Courses",
    focusCoursesText: "လက်တွေ့အခြေခံ သင်ကြားမှု။",
    focusWriteupsTitle: "Writeups",
    focusWriteupsText: "တိုတောင်းသော note နှင့် walkthrough။",
    focusVideosTitle: "Videos",
    focusVideosText: "ရွေးချယ်ထားသော demo များ။",
    servicesEyebrow: "Services",
    servicesTitle: "ကိုယ်ပိုင် tailnet ထဲက device များကို private control လုပ်ရန်။",
    servicesLead: "Personal Device Hub က public file relay မသုံးဘဲ Tailscale မှတစ်ဆင့် ကိုယ်ပိုင် computer များကို စီမံနိုင်စေသည်။",
    serviceStatus: "Private beta",
    serviceTitle: "Personal Device Hub",
    serviceText: "ကိုယ်ပိုင် computer များအတွက် private Tailscale device hub။",
    servicePriceLabel: "တစ်ကြိမ် down payment",
    servicePrice: "$10",
    servicePriceNote: "Tailscale လိုအပ်သည်။ Private beta setup access အတွက် တစ်ကြိမ်သာ ပေးချေရန်။",
    paymentStepOne: "Tailscale ကို အရင် install/open လုပ်ပါ။",
    paymentStepTwo: "Scan လုပ်ရန် အသင့်ဖြစ်မှ Ready to pay ကို နှိပ်ပါ။",
    paymentStepThree: "Payment slip ကို Telegram မှ ပို့ပါ။",
    paymentStepFour: "Approve ပြီးပါက Hub URL နှင့် setup help ပို့ပေးပါမည်။",
    paymentReadyButton: "ပေးချေရန် အသင့်ဖြစ်ပြီ",
    paymentReadyNote: "ဤ guide သည် app အသုံးပြုပုံကို ရှင်းပြထားသည်။ Private installer ကို payment approve ပြီးမှ ပို့ပါမည်။",
    qrEyebrow: "Thai QR Payment",
    qrTitle: "$10 down payment အတွက် TrueMoney ကို Scan လုပ်ပါ",
    qrText: "ငွေပေးချေပြီးပါက နာမည်ထည့်ပြီး slip ပုံကို upload လုပ်ပါ။ Telegram မလိုပါ။",
    slipCheckTitle: "Slip စစ်ဆေးပြီးမှ approve",
    slipCheckText: "Slip သည် ဤ TrueMoney account၊ မှန်ကန်သော payment နှင့် သင့်နာမည်တို့နှင့် ကိုက်ညီမှ access approve လုပ်ပါမည်။ မှားသော သို့မဟုတ် ပြန်သုံးထားသော slip များကို deny လုပ်ပါမည်။",
    copied: "Copy ပြီးပါပြီ",
    serviceButton: "မပေးခင် မေးရန်",
    downloadSetupGuide: "Setup guide download လုပ်ရန်",
    buyerNameLabel: "နာမည်",
    buyerNamePlaceholder: "သင့်နာမည်",
    slipImageLabel: "Payment slip ပုံ",
    submitSlipButton: "Slip ပို့ရန်",
    submitSlipSending: "Slip ပို့နေပါသည်...",
    submitSlipSuccess: "Slip ပို့ပြီးပါပြီ။ Approve ပြီးပါက private install package ပို့ပါမည်။",
    submitSlipError: "Slip မပို့နိုင်ပါ။ ပုံကိုစစ်ပြီး ပြန်ကြိုးစားပါ။",
    submitSlipNotConfigured: "Slip form မချိတ်ရသေးပါ။ ငွေပေးချေပြီးပါက @zalon123 သို့ message ပို့ပါ။",
    submitSlipFileLarge: "Slip ပုံသည် 4 MB သို့မဟုတ် ထက်နည်းရပါမည်။",
    paidDeliveryNotice: "Approve ပြီးပါက private install package နှင့် Hub setup link ပို့ပေးပါမည်။",
    serviceLineOne: "File များသည် သင့် private Tailscale network ထဲတွင်သာ ရှိသည်။",
    serviceLineTwo: "Live Screen သည် support ရှိသော desktop agent များနှင့်အလုပ်လုပ်သည်။",
    serviceLineThree: "Bearer token auth နှင့် allowed-folder control ပါဝင်သည်။",
    serviceLineFour: "Phone browser မှ dashboard၊ upload၊ download အသုံးပြုနိုင်သည်။",
    serviceFeatureOneTitle: "Private network first",
    serviceFeatureOneText: "Tailscale ချိတ်ထားပြီးသား device များအတွက် တည်ဆောက်ထားပြီး public agent endpoint မလိုအပ်ပါ။",
    serviceFeatureTwoTitle: "Files and transfers",
    serviceFeatureTwoText: "Configured folder များကို access လုပ်ပြီး ကိုယ်ပိုင် device များကြား file transfer လုပ်နိုင်သည်။",
    serviceFeatureThreeTitle: "Live Screen",
    serviceFeatureThreeText: "Support ရှိသော computer များတွင် real desktop screen bridge ကို private tailnet ထဲကနေ အသုံးပြုနိုင်သည်။",
    workEyebrow: "ရွေးချယ်ထားသော လက်ရာများ",
    workTitle: "Echtit မှ sample လက်ရာအချို့။",
    workLead: "Sample အနည်းငယ်သာ။",
    tagWriteup: "Writeup",
    tagVideo: "Video",
    wiresharkTitle: "Wireshark ထဲတွင် Sensitive Data ရှာဖွေခြင်း",
    wiresharkText: "Captured traffic ထဲမှ credential data ရှာဖွေခြင်း။",
    browserTitle: "Browser Forensics",
    browserText: "Browser artifact နှင့် history trace များ။",
    stegoVideoTitle: "Steganography File Hiding Demo",
    stegoVideoText: "Steganography demo အတို။",
    readWriteup: "Writeup ဖတ်ရန်",
    readNote: "Note ဖတ်ရန်",
    watch: "ကြည့်ရန်",
    watchVideo: "Video ကြည့်ရန်",
    contactEyebrow: "ဆက်သွယ်ရန်",
    contactTitle: "သင်တန်းအတွက် မေးမြန်းရန်။",
    contactText: "Access နှင့် payment ကို Telegram မှ။",
    contactButton: "@zalon123 သို့ Message ပို့ရန်",
  },
};

function applyLanguage(language) {
  const activeLanguage = translations[language] ? language : "en";
  document.documentElement.lang = activeLanguage === "mm" ? "my" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[activeLanguage][key] || translations.en[key] || element.textContent;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.setAttribute("placeholder", translations[activeLanguage][key] || translations.en[key] || element.getAttribute("placeholder") || "");
  });

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const isActive = button.dataset.langButton === activeLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("echtit-language", activeLanguage);
}

function getActiveLanguage() {
  const savedLanguage = localStorage.getItem("echtit-language");
  return translations[savedLanguage] ? savedLanguage : "en";
}

function initNavigation() {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  if (!header || !menuToggle) {
    return;
  }

  const icon = menuToggle.querySelector("i");

  const setMenu = (isOpen) => {
    header.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    if (icon) {
      icon.classList.toggle("fa-bars", !isOpen);
      icon.classList.toggle("fa-xmark", isOpen);
    }
  };

  menuToggle.addEventListener("click", () => {
    setMenu(!header.classList.contains("nav-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const sectionMap = new Map(
    [...navLinks].map((link) => [link.getAttribute("href"), link])
  );

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => link.classList.remove("is-active"));
      const activeLink = sectionMap.get(`#${entry.target.id}`);
      if (activeLink) {
        activeLink.classList.add("is-active");
      }
    });
  }, {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  });

  document.querySelectorAll("#course, #services, #work, #contact").forEach((section) => {
    sectionObserver.observe(section);
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px",
  });

  revealItems.forEach((item) => observer.observe(item));
}

function initCursor() {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!finePointer.matches || reduceMotion.matches) {
    return;
  }

  const root = document.documentElement;
  const trail = document.createElement("div");
  const dot = document.createElement("div");
  const interactiveSelector = "a, button, .course-card, .work-card, .focus-card, .module-card, .service-project-card, .payment-dialog, .lang-switch";

  trail.className = "cursor-trail";
  dot.className = "cursor-dot";
  trail.setAttribute("aria-hidden", "true");
  dot.setAttribute("aria-hidden", "true");
  document.body.append(trail, dot);

  const getInteractiveTarget = (target) => (
    target instanceof Element ? target.closest(interactiveSelector) : null
  );

  let cursorX = -100;
  let cursorY = -100;
  let trailX = cursorX;
  let trailY = cursorY;
  let frameId = 0;

  const render = () => {
    trailX += (cursorX - trailX) * 0.18;
    trailY += (cursorY - trailY) * 0.18;
    root.style.setProperty("--cursor-trail-x", `${trailX}px`);
    root.style.setProperty("--cursor-trail-y", `${trailY}px`);
    frameId = window.requestAnimationFrame(render);
  };

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    cursorX = event.clientX;
    cursorY = event.clientY;
    root.style.setProperty("--cursor-x", `${cursorX}px`);
    root.style.setProperty("--cursor-y", `${cursorY}px`);
    root.classList.add("cursor-ready");

    if (!frameId) {
      frameId = window.requestAnimationFrame(render);
    }
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    if (getInteractiveTarget(event.target)) {
      root.classList.add("cursor-hover");
    }
  });

  document.addEventListener("pointerout", (event) => {
    if (!getInteractiveTarget(event.target)) {
      return;
    }

    if (!getInteractiveTarget(event.relatedTarget)) {
      root.classList.remove("cursor-hover");
    }
  });

  document.addEventListener("mouseleave", () => {
    root.classList.remove("cursor-ready", "cursor-hover");
  });
}

function initPaymentFlow() {
  const toggle = document.querySelector("[data-payment-toggle]");
  const panel = document.querySelector("[data-payment-panel]");
  const closeControls = document.querySelectorAll("[data-payment-close]");
  const form = document.querySelector("[data-payment-form]");
  const status = document.querySelector("[data-payment-status]");

  if (!toggle || !panel) {
    return;
  }

  const qrImage = panel.querySelector("[data-qr-src]");
  const dialog = panel.querySelector(".payment-dialog");

  const closePanel = () => {
    panel.hidden = true;
    document.body.classList.remove("modal-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  };

  toggle.addEventListener("click", () => {
    if (qrImage && !qrImage.getAttribute("src")) {
      qrImage.setAttribute("src", qrImage.dataset.qrSrc);
    }

    panel.hidden = false;
    document.body.classList.add("modal-open");
    toggle.setAttribute("aria-expanded", "true");
    if (dialog instanceof HTMLElement) {
      dialog.focus();
    }
  });

  closeControls.forEach((control) => {
    control.addEventListener("click", closePanel);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      closePanel();
    }
  });

  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const submitButton = form.querySelector("button[type='submit']");
  const submitLabel = submitButton?.querySelector("[data-i18n]");
  const fileInput = form.querySelector("input[name='slip']");

  const setStatus = (key, mode = "neutral") => {
    if (!status) {
      return;
    }

    const language = getActiveLanguage();
    status.textContent = translations[language][key] || translations.en[key] || "";
    status.dataset.mode = mode;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!(fileInput instanceof HTMLInputElement) || !fileInput.files?.[0]) {
      setStatus("submitSlipError", "error");
      return;
    }

    if (fileInput.files[0].size > 4 * 1024 * 1024) {
      setStatus("submitSlipFileLarge", "error");
      return;
    }

    const language = getActiveLanguage();
    const originalLabel = submitLabel?.textContent || "";

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }
    if (submitLabel) {
      submitLabel.textContent = translations[language].submitSlipSending || translations.en.submitSlipSending;
    }
    setStatus("submitSlipSending");

    try {
      const response = await fetch("/api/payment-slip", {
        method: "POST",
        body: new FormData(form)
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        if (payload.error === "service_not_configured") {
          setStatus("submitSlipNotConfigured", "error");
          return;
        }
        throw new Error("Payment slip submit failed");
      }

      form.reset();
      setStatus("submitSlipSuccess", "success");
    } catch {
      setStatus("submitSlipError", "error");
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
      }
      if (submitLabel) {
        submitLabel.textContent = originalLabel || translations[getActiveLanguage()].submitSlipButton || translations.en.submitSlipButton;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("echtit-language") || "en";
  applyLanguage(savedLanguage);

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
  });

  initNavigation();
  initReveal();
  initCursor();
  initPaymentFlow();
});
