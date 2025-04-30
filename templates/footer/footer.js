// Récupération dynamique du chemin vers le dossier racine du site (nom du repo)
const pathParts = window.location.pathname.split('/');
const repoName = pathParts[1]; // 'test-site-web' par exemple
const siteRoot = '/' + repoName + '/';

// Construction du bon chemin vers le footer.html
const footerPath = siteRoot + 'templates/footer/footer.html';

// Injection du menu
fetch(menuPath)
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-container').innerHTML = html;
});