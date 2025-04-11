// Récupération dynamique du chemin vers le dossier racine du site (nom du repo)
const pathParts = window.location.pathname.split('/');
const repoName = pathParts[1]; // 'test-site-web' par exemple
const siteRoot = '/' + repoName + '/';

// Construction du bon chemin vers le menu.html
const menuPath = siteRoot + 'templates/menu/menu.html';

// Injection du menu
fetch(menuPath)
  .then(response => response.text())
  .then(html => {
    document.getElementById('menu-container').innerHTML = html;

    // 🔁 Corriger les liens dynamiquement selon la profondeur
    let prefix = '';
    const currentPath = window.location.pathname;

    // Si on est dans un sous-dossier du site (comme /test-site-web/pages/...), on ajoute '../'
    if (currentPath.startsWith(siteRoot + 'pages/')) {
      prefix = '../';
    }

    // 🔗 Corriger tous les <a data-link> dynamiquement
    document.querySelectorAll('#menu-container a[data-link]').forEach(link => {
      const page = link.getAttribute('href'); // ex: pages/activites.html
      link.setAttribute('href', prefix + page);
    });
  });
