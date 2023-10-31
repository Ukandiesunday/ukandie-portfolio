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
const topLink = document.querySelector(".link-2");

  window.onscroll = function(){
    const navHeight = fixedNav.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;
   scrollHeight > navHeight ? fixedNav.classList.add("show-nav"):fixedNav.classList.remove("show-nav");

   scrollHeight > 300 ? topLink.classList.add("top-link"):topLink.classList.remove("top-link");
  }

  topLink.addEventListener("click",()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

//Auto type text
const textToType = "Ukandie Sunday,";
const textElem = document.querySelector(".type-text");
let index = 0;
const  typeText = ()=> {
if(index < textToType.length){
  textElem.innerHTML += textToType.charAt(index);
  index ++;
  setTimeout(typeText, 300)
}
}

window.addEventListener("DOMContentLoaded",()=>{
  typeText();
} )

setTimeout(()=>{
const intro = document.querySelector(".intro");
intro.classList.add("intro-display")
},4500)


const aboutTitle = document.querySelector(".about-title")
const serviceTitle = document.querySelector(".service-title")
const myWork = document.querySelector(".work-title");
const contactTitle = document.querySelector(".contact-title")
window.onscroll = function(){
 let scrollHeight2 = window.scrollY;

 scrollHeight2 > 900 ? aboutTitle.classList.add("show-about-t"):aboutTitle.classList.remove("show-about-t");
 scrollHeight2 >= 1500 ? serviceTitle.classList.add("show-service-t"):serviceTitle.classList.remove("show-service-t");

 scrollHeight2 >= 2300 ? myWork.classList.add("show-work-t"):myWork.classList.remove("show-work-t");
 scrollHeight2 >= 3900 ? contactTitle.classList.add("show-contact-t"):contactTitle.classList.remove("show-contact-t");
 console.log(scrollHeight2); 
}

//To show remove preloader
const preloader = document.querySelector(".preloader");
window.onload = function(){
  preloader.style.display="none";
}