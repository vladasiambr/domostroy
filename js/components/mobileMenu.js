// const humburger = document.querySelector(".hamburger");
// const mobileMenu = document.querySelector(".header__mobile-menu");
// const overlay = document.querySelector(".overlay");

// humburger.addEventListener("click", openMenu);
// overlay.addEventListener("click", openMenu);

// function openMenu() {
//   mobileMenu.classList.toggle("header__mobile-menu--active");
//   overlay.classList.toggle("overlay--active");
// }
const menu = document.querySelector(".header__mobile-menu-container");
const menuItems = document.querySelectorAll(".header__mobile-menu-container");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".header__mobile-menu-exit");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
