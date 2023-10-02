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
const span = document.querySelector(".span");
const year = new Date().getFullYear();
span.textContent = `Copy right ${year}`