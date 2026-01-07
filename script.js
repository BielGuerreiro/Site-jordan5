// LÓGICA DO BANNER PRINCIPAL _____________________________________________________________________________________
const bannerContainer = document.querySelector(".banner");
const slides = document.querySelectorAll(".slider-item");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
const slideInterval = 3000;
let slideTimer;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

function prevSlide() {
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

slideTimer = setInterval(nextSlide, slideInterval);

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

// LÓGICA DE ARRASTAR O DEDO NO BANNER ________________________________________
let touchStartX = 0;
let touchEndX = 0;

if (bannerContainer) {
  bannerContainer.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideTimer);
  });

  bannerContainer.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleBannerSwipe();
    slideTimer = setInterval(nextSlide, slideInterval);
  });
}

function handleBannerSwipe() {
  if (touchEndX < touchStartX - 50) {
    nextSlide();
  }
  if (touchEndX > touchStartX + 50) {
    prevSlide();
  }
}

const trilhoProdutos = document.querySelector(".slider-wrapper");
const slidesProdutos = document.querySelectorAll(".produto-slide");
const btnAnteriorProd = document.querySelector(".esquerda");
const btnProximoProd = document.querySelector(".direita");

if (trilhoProdutos && slidesProdutos.length > 0) {
  let indiceProdutoAtual = 0;

  function moverCarrosselProdutos() {
    trilhoProdutos.style.transform = `translateX(${
      -indiceProdutoAtual * 100
    }%)`;
  }

  if (btnProximoProd) {
    btnProximoProd.addEventListener("click", () => {
      indiceProdutoAtual++;
      if (indiceProdutoAtual > slidesProdutos.length - 1) {
        indiceProdutoAtual = 0;
      }
      moverCarrosselProdutos();
    });
  }

  if (btnAnteriorProd) {
    btnAnteriorProd.addEventListener("click", () => {
      indiceProdutoAtual--;
      if (indiceProdutoAtual < 0) {
        indiceProdutoAtual = slidesProdutos.length - 1;
      }
      moverCarrosselProdutos();
    });
  }
}

//LÓGICA DO MENU E CARRINHO _________________________________________________________________
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
      if (boxCarrinho) boxCarrinho.classList.remove("aberto");
      if (boxMenu) boxMenu.classList.add("aberto");
      header.classList.add("menu-ativo");
    });
  }

  if (btnCarrinho) {
    btnCarrinho.addEventListener("click", () => {
      if (boxMenu) boxMenu.classList.remove("aberto");
      if (boxCarrinho) boxCarrinho.classList.add("aberto");
      header.classList.add("menu-ativo");
    });
  }

  if (btnCentral) {
    btnCentral.addEventListener("click", () => {
      if (header.classList.contains("menu-ativo")) {
        fecharTudo();
      } else {
        const paginaAtual = window.location.pathname;

        if (
          paginaAtual.includes("index.html") ||
          paginaAtual === "/" ||
          paginaAtual.endsWith("/")
        ) {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          window.location.href = "index.html";
        }
      }
    });
  }
});
