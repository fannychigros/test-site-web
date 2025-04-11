/*document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("menu-container");

  // Charger dynamiquement le fichier menu.html
  fetch("https://fannychigros.github.io/test-site-web/templates/html/menu.html")
    .then((response) => response.text())
    .then((html) => {
      container.insertAdjacentHTML("beforeend", html);  // Insérer le contenu HTML dans le conteneur

      // Attendre que le menu soit inséré avant d'ajouter les événements
      const burger = document.getElementById("burger");
      const menu = document.getElementById("menu");

      console.log(burger, menu);  // Vérifier si burger et menu sont définis
      if (burger && menu) {
        burger.addEventListener("click", function () {
          menu.classList.toggle("open"); // Toggle la classe pour ouvrir/fermer le menu
        });
      } else {
        console.error("Échec de l'insertion ou de l'accès au burger/menu.");
      }
    })
    .catch((error) => {
      console.error("Erreur lors du chargement de menu.html :", error);
    });
});*/
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});

