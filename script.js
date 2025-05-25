//###### js file ######\------->> TITLE = 7
const header = document.querySelector("header");

// sticky  nav  bar
function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

addEventListener("scroll", stickyNavbar);

let scroll_container = document.querySelector(".missions-section");
let Next_btn = document.querySelector(".right-btn");
let Back_btn = document.querySelector(".left-btn");

// scroll_container.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scroll_container.scrollLeft += evt.deltaY;
//   scroll_container.style.scrollBehavior = "auto";
// });

// Next_btn.addEventListener("click", () => {
//   scroll_container.style.scrollBehavior = "smooth";
//   scroll_container.scrollLeft += 200;
// });
// Back_btn.addEventListener("click", () => {
//   scroll_container.style.scrollBehavior = "smooth";
//   scroll_container.scrollLeft -= 200;
// });
scroll_container.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scroll_container.scrollLeft += evt.deltaY;
  scroll_container.style.scrollBehavior = "auto";
});

Next_btn.addEventListener("click", () => {
  Next_btn.disabled = true; // Disable the button
  scroll_container.style.scrollBehavior = "smooth";
  scroll_container.scrollLeft += 200;
  setTimeout(() => {
    Next_btn.disabled = false; // Re-enable the button after scrolling
  }, 200); // Adjust timeout based on animation duration
});

Back_btn.addEventListener("click", () => {
  Back_btn.disabled = true; // Disable the button
  scroll_container.style.scrollBehavior = "smooth";
  scroll_container.scrollLeft -= 200;
  setTimeout(() => {
    Back_btn.disabled = false; // Re-enable the button after scrolling
  }, 200); // Adjust timeout based on animation duration
});