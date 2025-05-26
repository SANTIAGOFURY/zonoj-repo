// variables call
const topBottom_btn = document.getElementById("topBottom_btn");

topBottom_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink1");
  if (window.scrollY === 0) {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

const contactPopup = document.getElementById("contact-popup");
const morePopup = document.getElementById("more-popup");

// Show Contact popup
document.querySelectorAll(".bnts button:first-child").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    contactPopup.classList.add("active");
  });
});

// Show More popup and set h2 to member's name
const morePopupH2 = morePopup.querySelector(".member-details h2");
document.querySelectorAll(".bnts button:last-child").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // Find the closest member card (e.g., .Said, .Ibrahim, etc.)
    const memberDiv = btn.closest(".overview-section > div");
    const memberName =
      memberDiv?.querySelector("h3")?.textContent.trim() || "Member";
    if (morePopupH2) morePopupH2.textContent = memberName;
    morePopup.classList.add("active");
  });
});

// Hide popups when close button or outside popup is clicked
document.querySelectorAll(".popup-content .close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    contactPopup.classList.remove("active");
    morePopup.classList.remove("active");
  });
});
[contactPopup, morePopup].forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});

const detailsPopup = document.getElementById("details-popup");

// Show Details popup when any Details button is clicked
document
  .querySelectorAll(".missions-section .mission button")
  .forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      detailsPopup.classList.add("active");
    });
  });

// Hide Details popup when close button or outside popup is clicked
detailsPopup.querySelector(".close-btn").addEventListener("click", () => {
  detailsPopup.classList.remove("active");
});
detailsPopup.addEventListener("click", (e) => {
  if (e.target === detailsPopup) {
    detailsPopup.classList.remove("active");
  }
});

const memberSocials = {
  "Ibrahim Naim": [
    { href: "https://twitter.com/ibrahim", icon: "twitter" },
    { href: "https://github.com/ibrahim", icon: "github" },
  ],
  "Yassine BAYA": [
    { href: "https://twitter.com/yassine", icon: "twitter" },
    { href: "https://github.com/yassine", icon: "github" },
  ],
  "Ilyasse DALAM": [
    { href: "https://twitter.com/ilyasse", icon: "twitter" },
    { href: "https://github.com/ilyasse", icon: "github" },
  ],
  "Youssef Jabari": [
    { href: "https://twitter.com/youssef", icon: "twitter" },
    { href: "https://github.com/youssef", icon: "github" },
  ],
  "Soufiane Akerka..": [
    { href: "https://twitter.com/soufiane", icon: "twitter" },
    { href: "https://github.com/soufiane", icon: "github" },
  ],
  "Said BOUAZIZ": [
    { href: "https://twitter.com/said", icon: "twitter" },
    { href: "https://github.com/said", icon: "github" },
  ],
};

const toggleBtn = document.querySelector(".toggle-btn");

if (!toggleBtn) {
  console.error("Toggle button not found.");
}

const themes = {
  purple: {
    "--color-primary": "#0f1e13",
    "--color-secondary": "#1e5f3f",
    "--color-background": "#0b1a10",
    "--box-shadow-light": "0 4px 12px rgba(0, 255, 128, 0.2)",
    "--box-shadow-dark": "0 4px 12px rgba(0, 255, 128, 0.4)",
    "--ease-in-out": "cubic-bezier(0.45, 0, 0.55, 1)",
    "--color-text-primary": "#d0f5e1",
    "--black-dark-box-shadow": "rgba(0, 64, 32, 0.8)",
    "--color-text-secondary": "#a4c8b0",
    "--color-accent": "#21c064",
    "--header-scrolled": "#1a3323",
    "--color-button-bg": "#21c064",
    "--popup-bg": "rgba(16, 32, 24, 0.9)",
    "--color-button-hover": "#1aa054",
    "--color-link": "#30d075",
    "--reset-color": "#e8f5e9",
    "--color-link-hover": "#2bb36b",
    "--color-header-bg": "#0f1e13",
    "--color-nav-bg": "#152c1f",
    "--color-aside-bg": "#1b3a2b",
    "--color-main-bg": "#0b1a10",
    "--color-border": "#245c3e",
    "--color-footer-wave": "#0a1c11",
  },
  orange: {
    "--color-primary": "#2b1b0f",
    "--color-secondary": "#ff8c42",
    "--color-background": "#1a1007",
    "--box-shadow-light": "0 4px 12px rgba(255, 165, 0, 0.2)",
    "--box-shadow-dark": "0 4px 12px rgba(255, 140, 0, 0.4)",
    "--ease-in-out": "cubic-bezier(0.45, 0, 0.55, 1)",
    "--color-text-primary": "#ffe8d6",
    "--color-text-secondary": "#ffcba4",
    "--color-accent": "#ff7f50",
    "--header-scrolled": "#3e2614",
    "--color-button-bg": "#ff8c42",
    "--popup-bg": "rgba(32, 20, 10, 0.9)",
    "--color-button-hover": "#e6762f",
    "--color-link": "#ff9f66",
    "--reset-color": "#fff3e0",
    "--color-link-hover": "#ff7f3f",
    "--color-header-bg": "#2b1b0f",
    "--color-nav-bg": "#3c2412",
    "--color-aside-bg": "#442912",
    "--color-main-bg": "#1a1007",
    "--color-border": "#553319",
    "--color-footer-wave": "#1c1106",
  },
  red: {
    "--color-primary": "#290000",
    "--color-secondary": "#8b0000",
    "--color-background": "#140000",
    "--box-shadow-light": "0 4px 12px rgba(255, 0, 0, 0.2)",
    "--box-shadow-dark": "0 4px 12px rgba(255, 0, 0, 0.4)",
    "--ease-in-out": "cubic-bezier(0.45, 0, 0.55, 1)",
    "--color-text-primary": "#ffdddd",
    "--color-text-secondary": "#ffaaaa",
    "--color-accent": "#ff4444",
    "--header-scrolled": "#400000",
    "--color-button-bg": "#d10000",
    "--popup-bg": "rgba(40, 0, 0, 0.9)",
    "--color-button-hover": "#a00000",
    "--color-link": "#ff3333",
    "--reset-color": "#ffeeee",
    "--color-link-hover": "#cc0000",
    "--color-header-bg": "#290000",
    "--color-nav-bg": "#3a0000",
    "--color-aside-bg": "#4d0000",
    "--color-main-bg": "#140000",
    "--color-border": "#990000",
    "--color-footer-wave": "#1a0000",
  },
};

const themeKeys = Object.keys(themes);
let currentThemeIndex = 0;

toggleBtn?.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themeKeys.length;
  const selectedTheme = themes[themeKeys[currentThemeIndex]];
  for (const variable in selectedTheme) {
    document.documentElement.style.setProperty(
      variable,
      selectedTheme[variable]
    );
  }
});
