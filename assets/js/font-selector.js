const fontSelectors = document.getElementsByClassName('doks-font-selector');

if (fontSelectors !== null) {

  for (font of fontSelectors) {
    font.addEventListener('click', (e) => {
      let preferredFont = e.srcElement.getAttribute('data-font-mode');
      document.documentElement.setAttribute('data-preferred-font', preferredFont);
      localStorage.setItem('preferred-font', preferredFont);
    });
  }
  
}
