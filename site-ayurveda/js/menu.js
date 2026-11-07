// Menu usado em todas as páginas do site.

// Abre e fecha o menu no celular
function abrirMenu() {
  document.getElementById("menu").classList.toggle("aberto");
}

// Fecha o menu quando clica em um link
document.querySelectorAll(".menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("menu").classList.remove("aberto");
  });
});

// Na página inicial, destaca no menu a seção que está na tela
var secoes = document.querySelectorAll("section[id]");
if (secoes.length && "IntersectionObserver" in window) {
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      document.querySelectorAll(".menu a").forEach(function (link) {
        var alvo = link.getAttribute("href").split("#")[1];
        link.classList.toggle("ativo", alvo === entrada.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secoes.forEach(function (secao) { observador.observe(secao); });
}
