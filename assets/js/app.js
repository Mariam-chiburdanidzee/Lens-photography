const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const htmlElement = document.querySelector("html");
const navLinks = document.querySelectorAll(".nav-link");

const handleNavLinksAnimation = (navM) => {
  for (let i = 0; i < navLinks.length; i++) {
    if (navM.classList.contains("menu-active")) {
      navLinks[i].style.animation = `navLinkFade 1s ease ${
        i / 7 + 0.2
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

// events
burger.addEventListener("click", handleBurgerBar);


const modal = document.querySelector(".modal");
const signUpBtn = document.querySelector(".slide-button");
const closeBtn = document.querySelector(".close");
signUpBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "block";
  }
});
