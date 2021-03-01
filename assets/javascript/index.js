let slider = document.querySelector(".slider-contenedor");
let sliderContent = document.querySelectorAll(".slider-contenido");
let contador = 1;
let width = sliderContent[0].clientWidth;
let Interval = 3000;

window.addEventListener("resize", function () {
  width = sliderContent[0].clientWidth;
});

setInterval(function () {
  slides();
}, Interval);

function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform .5s";
  contador++;

  if (contador == sliderContent.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0)";
      slider.style.transition = "transform .0s";
    }, 100);
  }
}
