const autoprefixer = require('autoprefixer');
const purgeImport = require('@fullhuman/postcss-purgecss');
const purgeCssPlugin = purgeImport.purgeCSSPlugin || purgeImport.default || purgeImport;
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgeCssPlugin({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h5',
        'alert-link',
        /row-cols-*/,
        'container-xxl',
        'container-fluid',
        'offcanvas-backdrop',
        'img-fluid',
        'lazyload',
        'blur-up',
        'figcaption',
        ...whitelister([
          './assets/scss/components/_alerts.scss',
          './assets/scss/components/_buttons.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_diagrams.scss',
          './assets/scss/components/_syntax.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/components/_tables.scss',
          './assets/scss/common/_dark.scss',
          './assets/scss/common/_font-switcher.scss',
          './assets/scss/common/_readingmode.scss',
          './node_modules/bootstrap/scss/_tooltip.scss',
          './node_modules/bootstrap/scss/_dropdown.scss',
          './node_modules/bootstrap/scss/_grid.scss',
          './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
