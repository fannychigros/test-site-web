document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("menu-container");

  // Chargement du fichier menu.html
  fetch("/templates/html/menu.html")
    .then((response) => response.text())
    .then((html) => {
      container.insertAdjacentHTML("beforeend", html); // Insérer le HTML dans le conteneur
      console.log("menu.html inséré avec succès");  // Vérification
      const burger = document.getElementById("burger");
      const menu = document.getElementById("menu");
      console.log(burger, menu); // Vérifier si burger et menu sont définis
      if (burger && menu) {
        burger.addEventListener("click", function () {
          menu.classList.toggle("open");
        });
      } else {
        console.error("Échec de l'insertion ou de l'accès au burger/menu.");
      }
    })
    .catch((error) => {
      console.error("Erreur lors du chargement de menu.html :", error);
  });
