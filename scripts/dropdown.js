/* function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  var allDropdowns = document.querySelectorAll(".dropdown-content");

  allDropdowns.forEach(function (menu) {
    if (menu.id !== id) {
      menu.style.display = "none"; // Fecha outros dropdowns
    }
  });

  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// Fecha o dropdown ao clicar fora
document.addEventListener("click", function (event) {
  var isDropdown = event.target.closest(".dropdown");

  if (!isDropdown) {
    document.querySelectorAll(".dropdown-content").forEach(function (menu) {
      menu.style.display = "none";
    });
  }
});
 */

function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  var arrowIcon = dropdown.previousElementSibling; // Obtém o ícone de seta

  var allDropdowns = document.querySelectorAll(".dropdown-content");
  var allArrows = document.querySelectorAll(".icon-arrow");

  allDropdowns.forEach(function (menu) {
    if (menu.id !== id) {
      menu.style.display = "none"; // Fecha outros dropdowns
    }
  });

  allArrows.forEach(function (icon) {
    if (icon !== arrowIcon) {
      icon.classList.remove("rotated"); // Remove rotação de outras setas
    }
  });

  // Alterna a visibilidade do dropdown
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";

  // Alterna a rotação da seta
  arrowIcon.classList.toggle("rotated");
}

// Fecha o dropdown ao clicar fora
document.addEventListener("click", function (event) {
  var isDropdown = event.target.closest(".dropdown");

  if (!isDropdown) {
    document.querySelectorAll(".dropdown-content").forEach(function (menu) {
      menu.style.display = "none";
    });

    document.querySelectorAll(".icon-arrow").forEach(function (icon) {
      icon.classList.remove("rotated"); // Reseta a seta ao fechar o menu
    });
  }
});
