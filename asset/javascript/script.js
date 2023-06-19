var typingEffect = new Typed(".multiText", {
  strings: ["Vipe", "Front-end developer", "Hello world !"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  startDelay: 1000,
  backDelay: 1500,
});

const buttons = document.querySelectorAll("[data-btn]");
const links = document.querySelectorAll(".description");
const arrows = document.querySelectorAll(".arrow");
const breakbar = document.querySelectorAll(".breakBar");
const line = document.querySelectorAll(".technoLink");
const icon = document.querySelector(".arrowContainer");

// animation for second section
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    links.forEach((link, i) => {
      if (i !== index) {
        link.classList.remove("gridActive");
        arrows[i].classList.remove("animating");
        breakbar[i].classList.remove("animating");
        line[i].classList.remove("animating");
        arrows[i].classList.remove("removeAnimation");
      }
    });

    links[index].classList.toggle("gridActive");
    arrows[index].classList.toggle("animating");
    breakbar[index].classList.toggle("animating");
    line[index].classList.toggle("animating");
    arrows[index].classList.toggle("removeAnimation");
  });
});

// cv
const cvButton = document.querySelector(".cvButton");
const cv = document.querySelector(".cvContainer");
const cvCloseButton = document.querySelector(".cross");

cvButton.addEventListener("click", () => {
  cv.classList.add("active");
  cvCloseButton.classList.add("active");
  document.body.classList.add("noScroll");
});

cvCloseButton.addEventListener("click", () => {
  cv.classList.remove("active");
  document.body.classList.remove("noScroll");
});

// nav Mobile
const burger = document.querySelector(".burger");
const navList = document.querySelector("#navList");

burger.addEventListener("click", () => {
  const visibility = navList.getAttribute("data-visible");

  if (visibility === "false") {
    navList.setAttribute("data-visible", "true");
    burger.setAttribute("aria-expanded", "true");
  } else if (visibility === "true") {
    navList.setAttribute("data-visible", "false");
    burger.setAttribute("aria-expanded", "false");
  }

  document.body.classList.toggle("bodyOverlay");
});
