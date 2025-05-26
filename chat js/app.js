const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const leftResizer = document.querySelector(".left-resizer");
const rightResizer = document.querySelector(".right-resizer");

function updateTwoWidth() {
  const left = one.classList.contains("shrink-left");
  const right = three.classList.contains("shrink-right");

  // Remove all expand classes first
  two.classList.remove("expand-left", "expand-right", "expand-both");

  if (left && right) {
    two.classList.add("expand-both");
  } else if (left) {
    two.classList.add("expand-left");
  } else if (right) {
    two.classList.add("expand-right");
  }
}

leftResizer.addEventListener("click", function () {
  one.classList.toggle("shrink-left");
  updateTwoWidth();
});

rightResizer.addEventListener("click", function () {
  three.classList.toggle("shrink-right");
  updateTwoWidth();
});

// ############################################################################33333333333333333333333333