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

// box do menu e carrinhp __________________________________________________
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const btnMenu = document.querySelector(".btn-menu-toggle");
  const btnCarrinho = document.querySelector(".btn-carrinho-toggle");
  const btnCentral = document.getElementById("btn-central-acao");

  const boxMenu = document.querySelector(".menu-expandido");
  const boxCarrinho = document.querySelector(".carrinho-expandido");

  function fecharTudo() {
    if (boxMenu) boxMenu.classList.remove("aberto");
    if (boxCarrinho) boxCarrinho.classList.remove("aberto");
    header.classList.remove("menu-ativo");
  }

  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      console.log("Clicou no Menu");

      if (boxCarrinho) boxCarrinho.classList.remove("aberto");

      if (boxMenu) boxMenu.classList.add("aberto");
      header.classList.add("menu-ativo");
    });
  }

  if (btnCarrinho) {
    btnCarrinho.addEventListener("click", () => {
      console.log("Clicou no Carrinho");

      if (boxMenu) boxMenu.classList.remove("aberto");

      if (boxCarrinho) boxCarrinho.classList.add("aberto");
      header.classList.add("menu-ativo");
    });
  }

  if (btnCentral) {
    btnCentral.addEventListener("click", () => {
      console.log("Clicou no Central");
      if (header.classList.contains("menu-ativo")) {
        fecharTudo();
      } else {
        console.log("Ação Home");
      }
    });
  }
});
