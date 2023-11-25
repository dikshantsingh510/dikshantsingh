let menu_btn = document.getElementById("menu_btn");
let navbar = document.querySelector("nav");

menu_btn.addEventListener("click",(e)=>{
    navbar.classList.toggle("active")
    // console.log(navbar.classList);
    // console.log(e.target);
})