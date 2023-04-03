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


// Get the modal
const modal = document.querySelector(".modal");

// Get the button that opens the modal
const signUpBtn = document.querySelector(".slide-button");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// When the user clicks on the button, open the modal
signUpBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "block";
  }
});

//
