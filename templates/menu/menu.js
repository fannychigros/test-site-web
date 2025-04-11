fetch('https://fannychigros.github.io/test-site-web/templates/menu/menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu-container').innerHTML = html;
    });
