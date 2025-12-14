const slides = document.querySelectorAll(".slider-item");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
const slideInterval = 3000;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

let slideTimer = setInterval(nextSlide, slideInterval);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    clearInterval(slideTimer);

    slides[currentSlide].classList.remove("active");
    indicators[currentSlide].classList.remove("active");

    currentSlide = index;
    slides[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");

    slideTimer = setInterval(nextSlide, slideInterval);
  });
});

const trilhoProdutos = document.querySelector(".slider-wrapper");
const slidesProdutos = document.querySelectorAll(".produto-slide");
const btnAnteriorProd = document.querySelector(".esquerda");
const btnProximoProd = document.querySelector(".direita");

let indiceProdutoAtual = 0;

function moverCarrosselProdutos() {
  trilhoProdutos.style.transform = `translateX(${-indiceProdutoAtual * 100}%)`;
}

btnProximoProd.addEventListener("click", () => {
  indiceProdutoAtual++;

  if (indiceProdutoAtual > slidesProdutos.length - 1) {
    indiceProdutoAtual = 0;
  }

  moverCarrosselProdutos();
});

btnAnteriorProd.addEventListener("click", () => {
  indiceProdutoAtual--;

  if (indiceProdutoAtual < 0) {
    indiceProdutoAtual = slidesProdutos.length - 1;
  }

  moverCarrosselProdutos();
});

// const btnMenu = document.querySelector(".bx-menu");
// const sidebarMenu = document.getElementById("sidebarMenu");
// const menuOverlay = document.getElementById("menuOverlay");
// const btnFechar = document.getElementById("btnFechar");

// function toggleMenu() {
//   sidebarMenu.classList.toggle("aberto");
//   menuOverlay.classList.toggle("aberto");

//   if (sidebarMenu.classList.contains("aberto")) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "auto";
//   }
// }

// btnMenu.addEventListener("click", toggleMenu);
// btnFechar.addEventListener("click", toggleMenu);
// menuOverlay.addEventListener("click", toggleMenu);
