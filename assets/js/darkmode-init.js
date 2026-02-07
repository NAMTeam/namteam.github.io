const globalDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const localMode = localStorage.getItem('theme');

if (globalDark && (localMode === null)) {

  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-dark-mode', '');
  document.documentElement.setAttribute('data-bs-theme', 'dark');

}

if (globalDark && (localMode === 'dark')) {

  document.documentElement.setAttribute('data-dark-mode', '');
  document.documentElement.setAttribute('data-bs-theme', 'dark');

}

if (localMode === 'dark') {

  document.documentElement.setAttribute('data-dark-mode', '');
  document.documentElement.setAttribute('data-bs-theme', 'dark');

}
