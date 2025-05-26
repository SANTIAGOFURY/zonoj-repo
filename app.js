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
