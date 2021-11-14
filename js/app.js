let bar = document.querySelector("#bar");
let mobileNav = document.querySelector(".header-bottom-mobile-nav");

bar.addEventListener("click", function () {
  menubar.classList.toggle("fa fa-times");
});

bar.addEventListener("click", function () {
  mobileNav.classList.toggle("header-bottom-show");
});
