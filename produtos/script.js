const boxTamanho = document.getElementById("box-tamanho");
const textoTamanho = document.getElementById("tamanho-selecionado");

if (boxTamanho) {
  boxTamanho.addEventListener("click", () => {
    boxTamanho.classList.toggle("ativo");
  });
}

function selecionarTamanho(tamanho) {
  if (textoTamanho) {
    textoTamanho.innerText = "Tamanho: " + tamanho;
  }
}

let quantidade = 1;
const numeroQtd = document.getElementById("numero-qtd");

function mudarQtd(valor) {
  quantidade += valor;
  if (quantidade < 1) quantidade = 1;
  if (numeroQtd) {
    numeroQtd.innerText = quantidade;
  }
}

const modal = document.getElementById("modal-tabela");
const btnTabela = document.getElementById("btn-tabela");
const fecharModal = document.querySelector(".fechar-modal");

if (btnTabela) {
  btnTabela.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}

if (fecharModal) {
  fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

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
      }
    });
  }

  const sliderWrapper = document.querySelector(".slider-wrapper");
  const dots = document.querySelectorAll(".dot");

  if (sliderWrapper && dots.length > 0) {
    sliderWrapper.addEventListener("scroll", () => {
      const scrollPos = sliderWrapper.scrollLeft;
      const width = sliderWrapper.offsetWidth;
      const activeIndex = Math.round(scrollPos / width);

      dots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add("ativo");
        } else {
          dot.classList.remove("ativo");
        }
      });
    });
  }
});
