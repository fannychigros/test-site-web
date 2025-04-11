document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("menu-container");

  // Chargement du fichier menu.html
  fetch("/templates/html/menu.html")
    .then((response) => response.text())
    .then((html) => {
      container.insertAdjacentHTML("beforeend", html);  // Insérer le HTML de menu.html

      // Vérification et activation du menu burger
      const burger = document.getElementById("burger");
      const menu = document.getElementById("menu");

      if (burger && menu) {
        burger.addEventListener("click", function () {
          menu.classList.toggle("open");
        });
      } else {
        console.error("Échec de la récupération du burger ou du menu.");
      }
    })
    .catch((error) => {
      console.error("Erreur de chargement de menu.html :", error);
    });
});
