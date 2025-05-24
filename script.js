//###### js file ######\------->> TITLE = 7
const header = document.querySelector("header");

// sticky  nav  bar
function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

addEventListener("scroll", stickyNavbar);
