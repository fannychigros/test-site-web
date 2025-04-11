// Charger dynamiquement le menu
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("menu-container");

  fetch("menu.html")
    .then((response) => response.text())
    .then((html) => {
      container.insertAdjacentHTML("beforeend", html);

      // Ensuite activer le burger menu
      const burger = document.getElementById("burger");
      const menu = document.getElementById("menu");

      burger.addEventListener("click", function () {
        menu.classList.toggle("open");
      });
    });
});
