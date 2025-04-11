// templates/menu/menu.js
fetch('../templates/menu/menu.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('menu-container').innerHTML = html;

    // 🔍 Trouve où on est dans le site
    const currentPath = window.location.pathname;
    const pathDepth = currentPath.split('/').length - 2; // -2 pour ignorer "" et "index.html" par ex

    // 🔁 Préfixe à appliquer aux liens
    let prefix = '';
    for (let i = 0; i < pathDepth; i++) {
      prefix += '../';
    }

    // 🔗 Corrige les liens dans le menu
    document.querySelectorAll('#menu-container a[data-link]').forEach(link => {
      const page = link.getAttribute('href'); // ex: "pages/activites.html"
      link.setAttribute('href', prefix + page);
    });
  });
