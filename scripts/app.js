//  const underline = document.querySelector(".underline").computedStyleMap.
// setInterval(()=>{
//   underline.classList.toggle('underline'); 
//   underline.style.width = "100%"
// },50)
const about = document.querySelector(".about-row");
const links = document.querySelectorAll(".links");
 const contents = document.querySelectorAll(".contents");
about.addEventListener("click",(event)=>{
const id = event.target.dataset.id;
  if(id){
    links.forEach((link)=>{
      link.classList.remove("active-link")
    })
    event.target.classList.add("active-link")
  }
  contents.forEach((content)=>{
content.classList.remove("active-content");
  })
  document.getElementById(id).classList.add("active-content");
})
