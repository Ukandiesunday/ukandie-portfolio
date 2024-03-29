// To toggle 'about' links and contents based on matching id
const about = document.querySelector(".js-about");
const links = document.querySelectorAll(".links");
const contents = document.querySelectorAll(".contents");
about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    links.forEach((link) => {
      link.classList.remove("active-link");
    });
    event.target.classList.add("active-link");

    contents.forEach((content) => {
      content.classList.remove("active-content");
    });
    document.getElementById(id).classList.add("active-content");
  }
});

//To display current year
const span = document.querySelector(".span");
const year = new Date().getFullYear();
span.textContent = `${year}. All rights reserved.`;

//To toggle navbar
const open = document.querySelector(".open");
const menu = document.querySelector(".side-menu");
open.addEventListener("click", (e) => {
  menu.classList.toggle("side-bar");
  open.classList.toggle("toggle-icon");
});
window.addEventListener("scroll", () => {
  if (menu.classList.contains("side-bar")) {
    menu.classList.remove("side-bar");
    open.classList.remove("toggle-icon");
  }
});

//Auto type text
const textToType = "Ukandie Sunday, frontend react, next js developer.";
const textElem = document.querySelector(".type-text");
let index = 0;
const typeText = () => {
  if (index < textToType.length) {
    textElem.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeText, 220);
  }
};
// To scale profile image on page load
const ukaImg = document.querySelector(".img");
function handleImgScale() {
  ukaImg.classList.add("scale-img");
}

//Adds hero section introduction
window.addEventListener("DOMContentLoaded", () => {
  handleImgScale();
  typeText();
});

const fixedNav = document.querySelector(".fixed-nav");
const topLink = document.querySelector(".link-2");

topLink.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const aboutTitle = document.querySelector(".about-title");
const serviceTitle = document.querySelector(".service-title");
const myWork = document.querySelector(".work-title");
const contactTitle = document.querySelector(".contact-title");

window.onscroll = function () {
  let scrollHeight2 = window.scrollY;

  // Adds fixed navbar
  const navHeight = fixedNav.getBoundingClientRect().height;
  scrollHeight2 > navHeight
    ? fixedNav.classList.add("show-nav")
    : fixedNav.classList.remove("show-nav");

  //Adds back to top link
  scrollHeight2 > 300
    ? topLink.classList.add("top-link")
    : topLink.classList.remove("top-link");

  // Adds scroll in subheaders
  scrollHeight2 > 500
    ? aboutTitle.classList.add("show-about-t")
    : aboutTitle.classList.remove("show-about-t");
  scrollHeight2 >= 1200
    ? serviceTitle.classList.add("show-service-t")
    : serviceTitle.classList.remove("show-service-t");

  scrollHeight2 >= 2300
    ? myWork.classList.add("show-work-t")
    : myWork.classList.remove("show-work-t");
  scrollHeight2 >= 3900
    ? contactTitle.classList.add("show-contact-t")
    : contactTitle.classList.remove("show-contact-t");

  //To scroll to service container
  const targetContainer = document.getElementById("target-container");
  const containerTop = targetContainer.getBoundingClientRect().top;

  const isContainerVisible = containerTop < window.innerHeight / 2;
  isContainerVisible
    ? targetContainer.classList.add("display-service")
    : targetContainer.classList.remove("display-service");
};
// To toggle dark and light mode
const theme = document.querySelector(".toggle-theme");
theme.addEventListener("click", () => {
  document.body.classList.toggle("theme");
  document.documentElement.classList.toggle("theme");
});
//To show remove preloader
const preloader = document.querySelector(".preloader");
window.onload = function () {
  preloader.style.display = "none";
};
