//Mobile
const mobLink = document.querySelectorAll(".mob-link");
const dropMobile = document.querySelectorAll(".drop-mob");
const arrowMobile = document.querySelectorAll(".arrow-mb");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-mb");

//Hamburger view
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

function remover(x, y) {
  for (let i = 0; i < x.length; i++) {
      x[i].classList.remove(y);
  }
}

for (let i = 0; i < mobLink.length; i++) {
  mobLink[i].addEventListener("click", () => {
    if(dropMobile[i].classList.contains("show")){
      remover(dropMobile, "show");
      remover(arrowMobile, "rotate");
    } else{
      remover(dropMobile, "show");
      remover(arrowMobile, "rotate");
      dropMobile[i].classList.toggle("show");
      arrowMobile[i].classList.toggle("rotate");
    }
  })
}

//Desktop
const heade = document.querySelector(".header-content");
const deskLink = document.querySelectorAll(".desk-link");
const dropDesk = document.querySelectorAll(".drop-desk");
const deskText = document.querySelectorAll(".desk-text");
const arrowDt = document.querySelectorAll(".arrow-dt");

for (let i = 0; i < deskLink.length; i++) {
  deskLink[i].addEventListener("click", () => {
    if(dropDesk[i].classList.contains("show")){
      remover(dropDesk, "show");
      remover(deskText, "active");
      remover(arrowDt, "rotate");
    } else{
      remover(dropDesk, "show");
      remover(deskText, "active");
      remover(arrowDt, "rotate");
      dropDesk[i].classList.toggle("show");
      deskText[i].classList.toggle("active");
      arrowDt[i].classList.toggle("rotate");
    }
  })
}

heade.addEventListener("click", () => {
  remover(dropDesk, "show");
  remover(deskText, "active");
  remover(arrowDt, "rotate");
})

window.addEventListener("resize", () => {
  remover(dropDesk, "show");
  remover(deskText, "active");
  remover(arrowDt, "rotate");
})