# Personal Device Hub Setup README

Personal Device Hub is a private dashboard for your own Tailscale-connected computers.

## Purpose Of This Guide

This file is only a public setup guide. It helps you understand what the app does before you pay.

The real app installer is not inside this file. After your payment slip is approved, you receive a self-hosted private install package. It runs on your own computer and creates your own private Tailscale dashboard URL.

## How You Use The App

1. Install Tailscale on your own computers and sign in.
2. Pay the `150 THB` down payment on the Echtit Services page.
3. Submit your name, Gmail address, and payment slip picture in the web form.
4. Wait for manual approval.
5. Receive your self-hosted private install zip by Gmail within one day after approval.
6. Run one `Install-Hub` file on the computer you choose as the Hub host.
7. Open the private Tailscale URL printed by the installer.
8. Run the agent setup command on each extra computer you want to manage.
9. Choose a device in the dashboard.
10. Use Files, Transfers, Device Info, or Live Screen when the device supports it.

The app is for your own devices only. It works through your private Tailscale network, not through a public file hosting server.

## Before You Pay

You need:

- Tailscale installed on every device you want to connect.
- All devices logged in to the same Tailscale tailnet.
- Permission to install the Personal Device Hub agent on each computer.

## Payment

1. Open the Echtit Services section.
2. Click `Ready to pay`.
3. Tap the TrueMoney payment link or scan the fixed-amount QR in the popup.
4. Pay exactly `150 THB`.
5. Fill the payment form with your name, Gmail address, and slip picture.
6. Submit the form.

The TrueMoney link opens a `฿150.00` transfer with the message `for private hub`. The QR is generated from the same link, so scanning it with a phone camera opens that fixed-amount transfer flow.

The form sends your slip to the owner for review:

```text
Personal Device Hub payment slip
I paid the 150 THB down payment.
Name:
Gmail:
Slip picture:
```

Access is approved only after the slip is manually checked. The amount must be exactly `150 THB`. Wrong, reused, unclear, or mismatched slips are denied.

If TrueMoney does not work for you, message `@zalon123` on Telegram before paying. After approval, the install zip is sent to the Gmail address you entered in the form within one day.

## What You Receive After Approval

After approval, you receive:

- the self-hosted private install package;
- Windows, macOS, and Linux `Install-Hub` files;
- Tailscale checklist;
- help if your device does not appear in the dashboard.

Delivery is by Gmail within one day after payment approval.

## Install Tailscale First

Download Tailscale:

```text
https://tailscale.com/download
```

Install it on every computer or phone you want to use with the Hub. Sign in with the same Tailscale account so every device is inside the same tailnet.

## Install The Private Hub

Run only the installer inside the private package sent after approval.

Windows:

```text
Right-click Install-Hub-Windows.cmd and choose Run as administrator.
```

macOS:

```text
Double-click Install-Hub-macOS.command.
```

Linux:

```sh
chmod +x Install-Hub-Linux.sh
./Install-Hub-Linux.sh
```

The installer starts the dashboard as an autorun service and prints your own private Tailscale URL.

## Open The Hub

1. Open the private Tailscale URL printed by the installer.
2. Press refresh.
3. Choose a device.
4. Use Settings to install the agent on extra computers.
5. Use Files, Transfers, or Live Screen when the device agent is ready.

## Important Notes

- The Hub does not give you a public IP.
- The owner does not host a URL for you.
- Tailscale gives each device a private `100.x.x.x` tailnet IP.
- Files and screen access work only after the agent is installed on that device.
- iPhone and iPad can use the browser dashboard, but iOS cannot run the desktop agent in the background.

## Troubleshooting

If a device is missing:

1. Make sure Tailscale is running.
2. Make sure the device is online in the Tailscale app.
3. Make sure the Hub agent was installed on that computer.
4. Send your device name, operating system, and Tailscale IP to the support contact you receive after approval.
