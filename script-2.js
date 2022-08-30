const open = document.querySelectorAll(".open");
const drop = document.querySelectorAll(".drop");
const text = document.querySelectorAll(".text");
const arrow = document.querySelectorAll(".dropdown-arrow");

function remover(el, cl) {
  for (let i=0; i < el.length; i++) {
      el[i].classList.remove(cl);
  }
}

for (let i=0; i < open.length; i++) {
  open[i].addEventListener("click", () => {
    if(drop[i].classList.contains("show")){
      for (let i=0; i < drop.length; i++) {
        drop[i].classList.remove("show");
      }
      for (let i=0; i < text.length; i++) {
        text[i].classList.remove("active");
      }
      for (let i=0; i < arrow.length; i++) {
        arrow[i].classList.remove("rotate");
      }
      // remover(drop, "show");
      // remover(text, "active");
      // remover(arrow, "rotate");
    } else{
      for (let i=0; i < drop.length; i++) {
        drop[i].classList.remove("show");
      }
      for (let i=0; i < text.length; i++) {
        text[i].classList.remove("active");
      }
      for (let i=0; i < arrow.length; i++) {
        arrow[i].classList.remove("rotate");
      }

      // remover(drop, "show");
      // remover(text, "active");
      // remover(arrow, "rotate");
      drop[i].classList.toggle("show");
      text[i].classList.toggle("active");
      arrow[i].classList.toggle("rotate");
    }
    // if (product.classList.contains("show")){
    //   productDropdown.classList.toggle("show")
    //   product.classList.toggle("active")
    //   dropdownArrow.classList.toggle("rotate")
    // }
    // else if{
    //   companyDropdown.classList.toggle("show")
    //   company.classList.toggle("active")
    //   dropdownArrow1.classList.toggle("rotate")
    // }
})

}
// product.addEventListener("click", () => {
//   productDropdown.classList.toggle("show")
//   product.classList.toggle("active")
//   dropdownArrow.classList.toggle("rotate")
// })

// company.addEventListener("click", () => {
//   companyDropdown.classList.toggle("show")
//   company.classList.toggle("active")
//   dropdownArrow1.classList.toggle("rotate")
// })

// connect.addEventListener("click", () => {
//   connectDropdown.classList.toggle("show")
//   connect.classList.toggle("active")
//   dropdownArrow2.classList.toggle("rotate")
// })
