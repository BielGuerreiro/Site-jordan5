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

// parte do login box _________________________________________
const iconeUser = document.querySelector(".user");
const boxLogin = document.getElementById("box-login");

iconeUser.addEventListener("click", function () {
  boxLogin.classList.toggle("ativo");
});

document.addEventListener("click", function (event) {
  const clicouDentro =
    iconeUser.contains(event.target) || boxLogin.contains(event.target);

  if (!clicouDentro) {
    boxLogin.classList.remove("ativo");
  }
});

function toggleMenu() {
  const menu = document.getElementById("meuMenu");
  menu.classList.toggle("ativo");
}

// codigo pra scrolar as img no celular _________________________________________________________
const bannerContainer = document.querySelector(".banner");
let touchstartX = 0;
let touchendX = 0;

// 1. Detecta onde o dedo tocou na tela
bannerContainer.addEventListener("touchstart", function (event) {
  touchstartX = event.changedTouches[0].screenX;
});

// 2. Detecta onde o dedo soltou a tela
bannerContainer.addEventListener("touchend", function (event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture(); // Chama a função que decide se foi swipe
});

// 3. Calcula a direção e chama a troca de imagem
function handleGesture() {
  // Se arrastou para a esquerda (próxima foto)
  if (touchendX < touchstartX - 50) {
    console.log("Arrastou para esquerda -> Próximo");

    // AQUI: Chame a função que avança o slide
    // Exemplo: proximoSlide(); ou mudarSlide(indice + 1);
    avancarSlide();
  }

  // Se arrastou para a direita (foto anterior)
  if (touchendX > touchstartX + 50) {
    console.log("Arrastou para direita -> Anterior");

    // AQUI: Chame a função que volta o slide
    // Exemplo: slideAnterior(); ou mudarSlide(indice - 1);
    voltarSlide();
  }
}
