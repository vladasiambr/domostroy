const humburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header__mobile-menu");
const exit = document.querySelector(".header__mobile-menu-exit");

humburger.addEventListener("click", openMenu);
exit.addEventListener("click", openMenu);

function openMenu() {
  mobileMenu.classList.toggle("header__mobile-menu--active");
  exit.classList.toggle(".header__mobile-menu-exit");
}
