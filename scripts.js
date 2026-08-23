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
    serviceText: "A private dashboard for Tailscale-connected macOS, Windows, and Linux devices. Browse allowed folders, move files, check device status, and open Live Screen where the device supports it.",
    servicePriceLabel: "One-time down payment",
    servicePrice: "$10",
    servicePriceNote: "Tailscale is required. Pay once for private beta setup access.",
    qrEyebrow: "Thai QR Payment",
    qrTitle: "Scan TrueMoney for the $10 down payment",
    qrText: "After payment, send the screenshot on Telegram with your Tailscale device list.",
    serviceButton: "Send payment screenshot",
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
    serviceText: "Tailscale ချိတ်ထားသော macOS၊ Windows၊ Linux device များအတွက် private dashboard ဖြစ်သည်။ Allowed folder များကို ကြည့်ရန်၊ file များရွှေ့ရန်၊ device status စစ်ရန်နှင့် support ရှိသော device များတွင် Live Screen ဖွင့်ရန် အသုံးပြုနိုင်သည်။",
    servicePriceLabel: "တစ်ကြိမ် down payment",
    servicePrice: "$10",
    servicePriceNote: "Tailscale လိုအပ်သည်။ Private beta setup access အတွက် တစ်ကြိမ်သာ ပေးချေရန်။",
    qrEyebrow: "Thai QR Payment",
    qrTitle: "$10 down payment အတွက် TrueMoney ကို Scan လုပ်ပါ",
    qrText: "ငွေပေးချေပြီးပါက screenshot နှင့် Tailscale device list ကို Telegram မှ ပို့ပါ။",
    serviceButton: "Payment screenshot ပို့ရန်",
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

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    const isActive = button.dataset.langButton === activeLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("echtit-language", activeLanguage);
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
  const interactiveSelector = "a, button, .course-card, .work-card, .focus-card, .module-card, .service-card, .service-terminal, .lang-switch";

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

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("echtit-language") || "en";
  applyLanguage(savedLanguage);

  document.querySelectorAll("[data-lang-button]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
  });

  initNavigation();
  initReveal();
  initCursor();
});
