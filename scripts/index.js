let menu_btn = document.querySelector(".menu_btn");
let navbar = document.querySelector("nav");

menu_btn.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
  menu_btn.classList.toggle("active");
  // console.log(navbar.classList);
  // console.log(e.target);
});

navbar.addEventListener("click", (e) => {
  console.log(e.target.tagName == "A");

  if (e.target.tagName == "A") {
    navbar.classList.toggle("active");
    menu_btn.classList.toggle("active");
  }
});
