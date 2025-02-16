document.addEventListener("DOMContentLoaded", function () {
  // Carrega Header e Footer com seus estilos CSS
  loadComponent(
    "components/header/header.html",
    "header-container",
    "components/header/header.css"
  );
  loadComponent(
    "components/footer/footer.html",
    "footer-container",
    "components/footer/footer.css"
  );

  // Carrega página inicial padrão
  loadPage("home");
});

// Função para carregar componentes HTML e seus estilos CSS
function loadComponent(url, containerId, cssPath) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
      if (cssPath) {
        loadCSS(cssPath); // Carrega o CSS do componente
      }
    })
    .catch((error) => console.error(`Erro ao carregar ${url}:`, error));
}

// Função para carregar arquivos CSS dinamicamente (evita duplicação)
function loadCSS(cssPath) {
  if (!document.querySelector(`link[href="${cssPath}"]`)) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);
  }
}

function loadPage(page, type) {
  let pagePath =
    type === "product"
      ? `pages/products/${page}/${page}.html`
      : `pages/${page}/${page}.html`;
  let cssPath =
    type === "product"
      ? `pages/products/${page}/${page}.css`
      : `pages/${page}/${page}.css`;
  let scriptPath =
    type === "product"
      ? `pages/products/${page}/${page}.js`
      : `pages/${page}/${page}.js`; // Novo: verifica se há um JS da página

  fetch(pagePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      loadCSS(cssPath); // Carrega o CSS correspondente da página
      loadScript(scriptPath); // Novo: Carrega o script específico da página
    })
    .catch((error) =>
      console.error(`Erro ao carregar a página ${page}:`, error)
    );
}

// Nova função para carregar scripts dinâmicos e evitar duplicação
function loadScript(scriptPath) {
  if (!document.querySelector(`script[src="${scriptPath}"]`)) {
    let script = document.createElement("script");
    script.src = scriptPath;
    script.defer = true;
    document.body.appendChild(script);
    console.log(`✅ Script carregado: ${scriptPath}`);
  }
}
