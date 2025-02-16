window.onload = function () {
  /** 🔹 Carrosséis padrão (Socks, Shin Guards, Combos, Camisetas) */
  document.querySelectorAll(".socks-kingSocks, .shin-guard, .combos, .t-shirts-carousel").forEach((carouselSection, index) => {
      let slideIndex = 0;
      const slides = carouselSection.querySelector(".carousel-slide");
      const items = carouselSection.querySelectorAll(".item-carousel");
      const paginationContainer = carouselSection.querySelector(".carousel-pagination");
      const prevButton = carouselSection.querySelector(".prev");
      const nextButton = carouselSection.querySelector(".next");

      if (!slides || items.length === 0 || !paginationContainer) {
          //console.error(`⚠️ ERRO: Elementos do carrossel ${index} não encontrados!`);
          return;
      }

      const itemsPerPage = 4;
      const totalItems = items.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      function createPaginationDots() {
          paginationContainer.innerHTML = "";
          for (let i = 0; i < totalPages; i++) {
              const dot = document.createElement("div");
              dot.classList.add("pagination-dot");
              if (i === 0) dot.classList.add("active");
              dot.setAttribute("data-index", i);
              dot.addEventListener("click", () => goToPage(i));
              paginationContainer.appendChild(dot);
          }
      }

      function updatePagination() {
          paginationContainer.querySelectorAll(".pagination-dot").forEach((dot, i) => {
              dot.classList.toggle("active", i === slideIndex);
          });
      }

      function updateCarousel() {
          const itemWidth = items[0].offsetWidth;
          const totalMove = itemsPerPage * itemWidth;
          slides.style.transform = `translateX(${-slideIndex * totalMove}px)`;
          updatePagination();
      }

      function moveSlide(direction) {
          slideIndex += direction;
          if (slideIndex < 0) {
              slideIndex = 0;
          } else if (slideIndex >= totalPages) {
              slideIndex = totalPages - 1;
          }
          updateCarousel();
      }

      function goToPage(index) {
          slideIndex = index;
          updateCarousel();
      }

      // Adicionar eventos de clique apenas para este carrossel
      if (prevButton) prevButton.addEventListener("click", () => moveSlide(-1));
      if (nextButton) nextButton.addEventListener("click", () => moveSlide(1));

      createPaginationDots();
      updateCarousel();
  });

  /** 🔹 Novo Carrossel de Ícones Circulares */
  document.querySelectorAll(".carousel-icons").forEach((carousel, index) => {
      const track = carousel.querySelector(".carousel-track");
      const items = carousel.querySelectorAll(".carousel-item");
      const prevButton = carousel.querySelector(".prev");
      const nextButton = carousel.querySelector(".next");

      let indexPosition = 0;
      const itemsPerPage = 4;
      const totalItems = items.length;

      function updateCarousel() {
          const itemWidth = items[0].offsetWidth;
          const totalMove = indexPosition * itemWidth;
          track.style.transform = `translateX(${-totalMove}px)`;
      }

      if (prevButton) {
          prevButton.addEventListener("click", () => {
              if (indexPosition > 0) {
                  indexPosition--;
                  updateCarousel();
              }
          });
      }

      if (nextButton) {
          nextButton.addEventListener("click", () => {
              if (indexPosition < totalItems - itemsPerPage) {
                  indexPosition++;
                  updateCarousel();
              }
          });
      }

      // Adicionar efeito de seleção
      items.forEach(item => {
          item.addEventListener("click", () => {
              document.querySelectorAll(".carousel-item").forEach(el => el.classList.remove("selected"));
              item.classList.add("selected");
          });
      });

      updateCarousel();
  });
};