const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");
burger.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});
close.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});
