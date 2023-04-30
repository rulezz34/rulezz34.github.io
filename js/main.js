const nav = document.querySelector("nav");
const menuLinks = document.querySelectorAll("nav ul a");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownLinks = document.querySelectorAll(".dropdown-a");



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

const btn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".ul-mobile");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

btn.addEventListener("click", ()=> {
  mobileNav.classList.toggle("nav-active-responsive");
  line1.classList.toggle("line-1-active")
  line2.classList.toggle("line-2-active")
  line3.classList.toggle("line-3-active")
})

function removeNav() {
  mobileNav.classList.remove("nav-active-responsive");
  line1.classList.remove("line-1-active")
  line2.classList.remove("line-2-active")
  line3.classList.remove("line-3-active")
}

mobileNav.addEventListener("click", removeNav)


function handleScroll() {
  const scrollY = window.scrollY;

  if (scrollY >= 160) {
    const animatedElements = document.querySelectorAll(".animate-me");
    animatedElements.forEach((animatedElement) => {
      animatedElement.classList.add('slide_up');
      console.log(animatedElements);
  });
}

if (scrollY >= 450) {
  const animatedElements = document.querySelectorAll(".animate-me-2");
  animatedElements.forEach((animatedElement) => {
    animatedElement.classList.add('slide_up');
    console.log(animatedElements);
});
}

if (scrollY >= 1200) {
  const animatedElements = document.querySelectorAll(".animate-me-3");
  animatedElements.forEach((animatedElement) => {
    animatedElement.classList.add('slide_up');
    console.log(animatedElements);
});
}
}



window.onscroll = handleScroll;
