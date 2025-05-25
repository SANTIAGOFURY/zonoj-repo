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

// Show More popup
document.querySelectorAll(".bnts button:last-child").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
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