/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      darkBG: '#222831',
      blueLt: '#2d4059',
      accentPr: '#ff5722',
      accentSec: '#f6c90e',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
