// Récupération dynamique du chemin vers le dossier racine du site (nom du repo)
const footerPathParts = window.location.pathname.split('/');
const footerRepoName = footerPathParts[1]; // 'test-site-web' par exemple
const footerSiteRoot = '/' + footerRepoName + '/';

// Construction du bon chemin vers le footer.html
const footerPath = footerSiteRoot + 'templates/footer/footer.html';

// Injection du menu
fetch(footerPath)
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-container').innerHTML = html;
});