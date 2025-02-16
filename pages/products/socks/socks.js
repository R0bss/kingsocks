window.onload = function () {
  console.log("✅ O script foi carregado com sucesso!");

  let mainImage = document.getElementById("main-image");
  let thumbnails = document.querySelectorAll(".thumb");
  let colorOptions = document.querySelectorAll(".color");
  let quantity = document.getElementById("quantity");
  let plus = document.getElementById("plus");
  let minus = document.getElementById("minus");

  // Alternar imagens ao clicar no carrossel lateral
  thumbnails.forEach(thumb => {
      thumb.addEventListener("click", function () {
          thumbnails.forEach(t => t.classList.remove("active"));
          this.classList.add("active");
          mainImage.src = this.src;
      });
  });

  // Alternar imagem ao clicar nas opções de cor
  colorOptions.forEach(color => {
      color.addEventListener("click", function () {
          colorOptions.forEach(c => c.classList.remove("active"));
          this.classList.add("active");
          mainImage.src = this.getAttribute("data-image");
      });
  });

  // Controle de quantidade
  let count = 1;
  plus.addEventListener("click", () => {
      count++;
      quantity.textContent = count;
  });

  minus.addEventListener("click", () => {
      if (count > 1) {
          count--;
          quantity.textContent = count;
      }
  });
};