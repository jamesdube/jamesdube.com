let mix = require('laravel-mix');

var tailwindcss = require('tailwindcss');

mix.sass('src/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  });


