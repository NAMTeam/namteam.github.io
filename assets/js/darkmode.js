const mode = document.getElementById('mode');

if (mode !== null) {

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {

      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-dark-mode', '');
      document.documentElement.setAttribute('data-bs-theme', 'dark');

    } else {

      localStorage.setItem('theme', 'light');
      document.documentElement.removeAttribute('data-dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'light');

    }

  })

  mode.addEventListener('click', () => {

    document.documentElement.toggleAttribute('data-dark-mode');
    localStorage.setItem('theme', document.documentElement.hasAttribute('data-dark-mode') ? 'dark' : 'light');
    document.documentElement.hasAttribute('data-dark-mode') ? document.documentElement.setAttribute('data-bs-theme', 'dark') : document.documentElement.setAttribute('data-bs-theme', 'light');

  });

  if (localStorage.getItem('theme') === 'dark') {

    document.documentElement.setAttribute('data-dark-mode', '');

  } else {

    document.documentElement.removeAttribute('data-dark-mode');

  }

}
