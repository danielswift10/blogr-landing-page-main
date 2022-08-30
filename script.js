//Mobile
const mobileView = document.querySelectorAll(".mobile-view");
const dropMobile = document.querySelectorAll(".drop-mb");
const arrowMobile = document.querySelectorAll(".arrow-mb");
const view = document.querySelectorAll(".view");

//Desktop
const openMb = document.querySelectorAll(".open");
const drop = document.querySelectorAll(".drop");
const text = document.querySelectorAll(".text");
const arrow = document.querySelectorAll(".dropdown-arrow");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-mb");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

function remove(classs, effect) {
  for (let i = 0; i < classs.length; i++) {
      classs[i].classList.remove(effect);
  }
}

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener("click", () => {
    if(dropMobile[i].classList.contains("show")){
      remove(dropMobile, "show");
      remove(arrowMobile, "rotate");
    } else{
      remove(dropMobile, "show");
      remove(arrowMobile, "rotate");
      dropMobile[i].classList.toggle("show");
      arrowMobile[i].classList.toggle("rotate");
    }
  })
}

for (let i=0; i < openMb.length; i++) {
  openMb[i].addEventListener("click", () => {
    if(drop[i].classList.contains("show")){
      remove(drop, "show");
      remove(text, "active");
      remove(arrow, "rotate");
    } else{
      remove(drop, "show");
      remove(text, "active");
      remove(arrow, "rotate");
      drop[i].classList.toggle("show");
      text[i].classList.toggle("active");
      arrow[i].classList.toggle("rotate");
    }
  })
}
