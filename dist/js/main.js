const projectBtn = document.querySelector("#open_project");
const projectStatus = document.querySelector(
  ".project_status_container_mobile"
);
const projectCloseBtn = document.querySelector("#close_project");

const navBtn = document.querySelector("#open_nav");
const nav = document.querySelector("#nav");
const aside = document.querySelector("#aside");


// for navigation button 
navBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    aside.appendChild(overlay);
    overlay.addEventListener('click',()=>{
    nav.classList.remove('active');
    overlay.remove();
    })
})

//for project status
window.addEventListener("scroll", () => {
  projectStatus.classList.remove("active");
});
projectBtn.addEventListener("click", () => {
  projectStatus.classList.add("active");
});
projectCloseBtn.addEventListener("click", () => [
  projectStatus.classList.remove("active"),
]);
