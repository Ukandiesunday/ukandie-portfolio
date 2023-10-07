// To toggle 'about' links and contents based on matching id
const about = document.querySelector(".js-about");
const links = document.querySelectorAll(".links");
const contents = document.querySelectorAll(".contents");
about.addEventListener("click",(event)=>{
const id = event.target.dataset.id;
  if(id){
    links.forEach((link)=>{
      link.classList.remove("active-link");
    })
    event.target.classList.add("active-link");
  
  contents.forEach((content)=>{
  content.classList.remove("active-content");
  })
  document.getElementById(id).classList.add("active-content");
}
})
//To display current year 
const span = document.querySelector(".span");
const year = new Date().getFullYear();
span.textContent = `Copy right ${year}`

// To apply fixed nav when the page scrolls
const fixedNav = document.querySelector(".fixed-nav");
window.addEventListener("scroll", ()=>{
  const navHeight = fixedNav.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;
 scrollHeight > navHeight ? fixedNav.classList.add("show-nav"):fixedNav.classList.remove("show-nav");
})
//To toggle navbar
const open = document.querySelector(".open");
const menu = document.querySelector(".side-menu");
open.addEventListener("click",(e)=>{
  menu.classList.toggle("side-bar");
  open.classList.toggle("toggle-icon");
})
window.addEventListener("scroll",()=>{
  if(menu.classList.contains("side-bar")){
    menu.classList.remove("side-bar");
    open.classList.remove("toggle-icon");
  }
})