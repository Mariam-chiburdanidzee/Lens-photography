const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const htmlElement = document.querySelector("html");
const navLinks = document.querySelectorAll(".nav-link");
const hiddenImages = document.querySelectorAll(".hidden-image");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-image");
    }
  });
});

hiddenImages && hiddenImages.forEach((el) => observer.observe(el));
const handleNavLinksAnimation = (navM) => {
  for (let i = 0; i < navLinks.length; i++) {
    if (navM.classList.contains("menu-active")) {
      navLinks[i].style.animation = `navLinkFade 1s ease ${i / 7 + 0.2
        }s forwards`;
    } else {
      navLinks[i].style.animation = "";
    }
  }
};

const handleBurgerBar = () => {
  document.documentElement.scrollTop = 0;
  htmlElement.classList.toggle("overflow-h");
  navMenu.classList.toggle("menu-active");
  burger.classList.toggle("burger-active");

  handleNavLinksAnimation(navMenu);
};


burger.addEventListener("click", handleBurgerBar);


const modal = document.querySelector(".modal");
const signUpBtn = document.querySelector(".slide-button");
const closeBtn = document.querySelector(".close");
if (signUpBtn) {
  signUpBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
    htmlElement.classList.add("overflow-h");
    modal.style.display = "flex";
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    htmlElement.classList.remove("overflow-h");
    modal.style.display = "none";
  });

}


window.addEventListener("click", function (event) {


  if (event.target.style.display === "flex") {
    htmlElement.classList.remove("overflow-h");
    event.target.style.display = "none"

  }

});

