// --- Lógica do Seletor de Tamanho ---
const boxTamanho = document.getElementById("box-tamanho");
const textoTamanho = document.getElementById("tamanho-selecionado");

// Abrir/Fechar dropdown
boxTamanho.addEventListener("click", () => {
  boxTamanho.classList.toggle("ativo");
});

// Selecionar opção
function selecionarTamanho(tamanho) {
  textoTamanho.innerText = "Tamanho: " + tamanho;
  // O evento de click no pai já fecha o dropdown, mas se precisar forçar:
  // boxTamanho.classList.remove('ativo');
}

// --- Lógica de Quantidade ---
let quantidade = 1;
const numeroQtd = document.getElementById("numero-qtd");

function mudarQtd(valor) {
  quantidade += valor;
  if (quantidade < 1) quantidade = 1; // Não deixa baixar de 1
  numeroQtd.innerText = quantidade;
}

// --- Lógica da Tabela de Medidas (Modal) ---
const modal = document.getElementById("modal-tabela");
const btnTabela = document.getElementById("btn-tabela");
const fecharModal = document.querySelector(".fechar-modal");

btnTabela.addEventListener("click", () => {
  modal.style.display = "flex";
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar ao clicar fora do modal
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
