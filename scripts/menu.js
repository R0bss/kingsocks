document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");

  // Observador para detectar mudanças no header
  const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
          if (mutation.type === "childList" && headerContainer.children.length > 0) {
              initMenu(); // Chama a função do menu assim que o header estiver carregado
              observer.disconnect(); // Para de observar depois que carregou
          }
      });
  });

  observer.observe(headerContainer, { childList: true });

  function initMenu() {
      const menuToggle = document.querySelector(".menu-toggle");
      const menuItems = document.querySelector(".menu-items");

      if (menuToggle && menuItems) {
          menuToggle.addEventListener("click", function () {
              menuItems.classList.toggle("active");
          });

          // Fecha o menu ao clicar fora dele
          document.addEventListener("click", function (event) {
              if (!menuItems.contains(event.target) && !menuToggle.contains(event.target)) {
                  menuItems.classList.remove("active");
              }
          });

      } else {
          console.error("Erro: Elementos do menu não encontrados. Verifique a estrutura do HTML.");
      }
  }
});