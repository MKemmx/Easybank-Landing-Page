const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (overlay.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

overlay.addEventListener("click", (e) => {
  let id = e.target.id;

  if (id === "overlay") {
    menu.classList.remove("active");
    overlay.classList.remove("active");

    if (overlay.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
});
