// we need to grab close icon -> nav__close
// we need to grab menu icon -> nav__icon
// we need our list inside which all header options are there -> nav__list
// we also need our background overlay -> nav__bgOverlay
const navIconEl = document.querySelector(".nav__icon");
const navCloseEl = document.querySelector(".nav__close");
const navList = document.querySelector(".nav__list");
const navBgOverlayEl = document.querySelector(".nav__bgOverlay");

navIconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);
navBgOverlayEl.addEventListener("click", navClose);

// we need function to open the navigation bar
function navOpen() {
  // adding show class to our navlist when nav icon clicked
  // show class does   transform: translateX(-100%); which brings the nav list in view
  navList.classList.add("show");
  // we also want to activate the background overlay
  // active class makes display block
  navBgOverlayEl.classList.add("active");
  //  whenever we open menu we want to add these styles
  //   100vh height prevents us from scrolling, whatever will be outside 100vh will be hidden because of overflow hidden
  document.body.style =
    "visibility:visible; height:100vh; width: 100vw; overflow:hidden;";
}

// function to close navigation bar
// we need overflow x hidden so that what is outside our view point which is the menu we cannot scroll horizontally to it
// height initial means whatever height we initially had, since no specific height we will have scroll back
function navClose() {
  navList.classList.remove("show");
  navBgOverlayEl.classList.remove("active");
  document.body.style =
    "visibility:visible, height:initial; width: 100%; overflow-x:hidden;";
}

// initialize aos library
// anchor placement - animation will start when our element top and viewpoint bottom meet animation starts
// scroll 200px the animation will start
// once false means animation will occur everytime
AOS.init({
  offset: 200,
  delay: 100,
  duration: 100,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
