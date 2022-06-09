const preprocess = require("svelte-preprocess");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/*.{html,js,svelte,ts}'],
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  theme: {
    extend: {
      colors: {'jelly-bean': {
        '50': '#90D0E7',
        '100': '#7FC8E3',
        '200': '#5DBADC',
        '300': '#3CACD5',
        '400': '#2996BF',
        '500': '#227C9D',
        '600': '#18586F',
        '700': '#0E3341',
        '800': '#040F13',
        '900': '#000000'}
      },
    },
  },
  plugins: [],
}
