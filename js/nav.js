const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav ul a");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownLinks = document.querySelectorAll(".dropdown-a");
const btn = document.querySelector(".hamburger");
const mobileNav = document.querySelector("nav ul");


window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 60) {
    nav.classList.add("nav-active");
    menuLinks.forEach((link) => {
      link.classList.add("menu-links-active");
    });
  } else {
    nav.classList.remove("nav-active");
    menuLinks.forEach((link) => {
      link.classList.remove("menu-links-active");
    });
  }
});

window.addEventListener("scroll", () => {
  let hasMyClass = false;

  menuLinks.forEach((link) => {
    if (link.classList.contains("menu-links-active")) {
      hasMyClass = true;
    }
  });

  if (hasMyClass) {
    dropdownContent.classList.add("dropdown-scrolled");
    dropdownLinks.forEach((link) => {
      link.classList.add("dropdown-links-active");
    });
  } else {
    dropdownContent.classList.remove("dropdown-scrolled");
    dropdownLinks.forEach((link) => {
      link.classList.remove("dropdown-links-active");
    });
  }
});

function removeNav() {
  mobileNav.classList.remove("nav-active-responsive");

}

btn.addEventListener("click", ()=> {
  mobileNav.classList.toggle("nav-active-responsive");
})

mobileNav.addEventListener("click", removeNav)