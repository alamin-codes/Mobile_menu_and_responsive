//____________/Mobile-menu\_____________\\
const menuIcon = document.getElementById("menu-icon-equiv");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

let isOpen = false;

menuIcon.addEventListener("click", () => {
  if(!isOpen) {
    mobileMenu.classList.remove("translate-x-full"); //slide in
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    isOpen = true;
  } else {
    mobileMenu.classList.add("translate-x-full"); //slide out
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden")
    isOpen = false;
  }
})
















// const menuIcon = document.getElementById("menu-icon");
// const mobileMenu = document.getElementById("mobile-menu");

// let isOpen = false;

// menuIcon.addEventListener("click", () => {
//   if (!isOpen) {
//     mobileMenu.classList.remove("translate-x-full"); // slide in
//     isOpen = true;
//   } else {
//     mobileMenu.classList.add("translate-x-full"); // slide out
//     isOpen = false;
//   }
// });