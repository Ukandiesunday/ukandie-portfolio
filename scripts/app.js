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
span.textContent = `Copy right ${year}`;

 
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
  setTimeout(typeText, 350)
}
}

//Adds hero section introduction
window.addEventListener("DOMContentLoaded",()=>{
  typeText();
} )

setTimeout(()=>{
const intro = document.querySelector(".intro");
intro.classList.add("intro-display")
},5000)



  const fixedNav = document.querySelector(".fixed-nav");
  const topLink = document.querySelector(".link-2");

  topLink.addEventListener("click",()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })


const aboutTitle = document.querySelector(".about-title")
const serviceTitle = document.querySelector(".service-title")
const myWork = document.querySelector(".work-title");
const contactTitle = document.querySelector(".contact-title")


window.onscroll = function(){
 let scrollHeight2 = window.scrollY;

 // Adds fixed navbar 
 const navHeight = fixedNav.getBoundingClientRect().height;
scrollHeight2 > navHeight ? fixedNav.classList.add("show-nav"):fixedNav.classList.remove("show-nav");

//Adds back to top link
scrollHeight2 > 100 ? topLink.classList.add("top-link"):topLink.classList.remove("top-link");

// Adds scroll in subheaders
 scrollHeight2 > 500 ? aboutTitle.classList.add("show-about-t"):aboutTitle.classList.remove("show-about-t");
 scrollHeight2 >= 1200 ? serviceTitle.classList.add("show-service-t"):serviceTitle.classList.remove("show-service-t");

 scrollHeight2 >= 2300 ? myWork.classList.add("show-work-t"):myWork.classList.remove("show-work-t");
 scrollHeight2 >= 3900 ? contactTitle.classList.add("show-contact-t"):contactTitle.classList.remove("show-contact-t");
}


//To show remove preloader
const preloader = document.querySelector(".preloader");
window.onload = function(){
  preloader.style.display="none";
}