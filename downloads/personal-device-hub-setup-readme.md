# Personal Device Hub Setup README

Personal Device Hub is a private dashboard for your own Tailscale-connected computers.

## Before You Pay

You need:

- Tailscale installed on every device you want to connect.
- All devices logged in to the same Tailscale tailnet.
- Permission to install the Personal Device Hub agent on each computer.
- Telegram, so you can send the payment slip and receive setup help.

## Payment

1. Open the Echtit Services section.
2. Click `Ready to pay`.
3. Scan the TrueMoney QR in the popup.
4. Pay the `$10` one-time down payment.
5. Send the payment slip screenshot to Telegram: `@zalon123`.

Send this message with your slip:

```text
Personal Device Hub payment slip
I paid the $10 down payment.
Tailscale account/email:
Device list:
Preferred Hub URL/name:
```

Access is approved only after the slip is manually checked. Wrong, reused, unclear, or mismatched slips are denied.

## What You Receive After Approval

After approval, you receive:

- your Hub URL;
- the setup command for your device;
- Tailscale checklist;
- help if your device does not appear in the dashboard.

## Install Tailscale First

Download Tailscale:

```text
https://tailscale.com/download
```

Install it on every computer or phone you want to use with the Hub. Sign in with the same Tailscale account so every device is inside the same tailnet.

## Install The Hub Agent

Run only the command sent to you after approval.

Linux:

```sh
curl -fsSL http://<your-hub-url>/agent/install-linux.sh | bash
```

Windows PowerShell:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "irm http://<your-hub-url>/agent/install-windows.ps1 | iex"
```

Windows Administrator PowerShell is recommended for firewall and Live Screen setup.

macOS:

macOS setup is handled during private beta support. You will receive the matching command after approval.

## Open The Hub

1. Open your Hub URL in a browser.
2. Press refresh.
3. Choose a device.
4. Use Files, Transfers, or Live Screen when the device agent is ready.

## Important Notes

- The Hub does not give you a public IP.
- Tailscale gives each device a private `100.x.x.x` tailnet IP.
- Files and screen access work only after the agent is installed on that device.
- iPhone and iPad can use the browser dashboard, but iOS cannot run the desktop agent in the background.

## Troubleshooting

If a device is missing:

1. Make sure Tailscale is running.
2. Make sure the device is online in the Tailscale app.
3. Make sure the Hub agent was installed on that computer.
4. Send your device name, operating system, and Tailscale IP to Telegram.
