const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
const nextImageDelay = 5000;
let currentImageCounter = 0;

//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  //slideshowImages[currentImageCounter].style.display = "none";
  //slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages[currentImageCounter].style.zIndex = -2;

  const tempCounter = currentImageCounter;
  setTimeout(() => {
    slideshowImages[tempCounter].style.opacity = 0;
  }, 1000);
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  //slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
  slideshowImages[currentImageCounter].style.zIndex = -1;
}

const slideshowImages2 = document.querySelectorAll(".second .slideshow2-img");
const nextImageDelay2 = 5000;
let currentImageCounter2 = 0;

//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages2[currentImageCounter2].style.opacity = 1;

setInterval(nextImage2, nextImageDelay2);

function nextImage2() {
  //slideshowImages[currentImageCounter].style.display = "none";
  //slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages2[currentImageCounter2].style.zIndex = -2;

  const tempCounter2 = currentImageCounter2;
  setTimeout(() => {
    slideshowImages2[tempCounter2].style.opacity = 0;
  }, 1000);
  currentImageCounter2 = (currentImageCounter2 + 1) % slideshowImages2.length;
  //slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages2[currentImageCounter2].style.opacity = 1;
  slideshowImages2[currentImageCounter2].style.zIndex = -1;
}

const slideshowImages3 = document.querySelectorAll(".third .slideshow3-img");
const nextImageDelay3 = 5000;
let currentImageCounter3 = 0;

//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages3[currentImageCounter3].style.opacity = 1;

setInterval(nextImage3, nextImageDelay3);

function nextImage3() {
  //slideshowImages[currentImageCounter].style.display = "none";
  //slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages3[currentImageCounter3].style.zIndex = -2;

  const tempCounter3 = currentImageCounter3;
  setTimeout(() => {
    slideshowImages3[tempCounter3].style.opacity = 0;
  }, 1000);
  currentImageCounter3 = (currentImageCounter3 + 1) % slideshowImages3.length;
  //slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages3[currentImageCounter3].style.opacity = 1;
  slideshowImages3[currentImageCounter3].style.zIndex = -1;
}

const slideshowImages4 = document.querySelectorAll(".fourth .slideshow4-img");
const nextImageDelay4 = 5000;
let currentImageCounter4 = 0;

//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages4[currentImageCounter4].style.opacity = 1;

setInterval(nextImage4, nextImageDelay4);

function nextImage4() {
  //slideshowImages[currentImageCounter].style.display = "none";
  //slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages4[currentImageCounter4].style.zIndex = -2;

  const tempCounter4 = currentImageCounter4;
  setTimeout(() => {
    slideshowImages4[tempCounter4].style.opacity = 0;
  }, 1000);
  currentImageCounter4 = (currentImageCounter4 + 1) % slideshowImages4.length;
  //slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages4[currentImageCounter4].style.opacity = 1;
  slideshowImages4[currentImageCounter4].style.zIndex = -1;
}
