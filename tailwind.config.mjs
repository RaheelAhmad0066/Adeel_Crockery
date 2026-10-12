/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'earth-peach': '#FFF0EB',
        'earth-olive': '#F0F2E5',
        'earth-dark': '#000104',
        'earth-gray': '#5E666C',
        'earth-border': '#E8E8E8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        gallient: ['"Gallient"', '"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        quote: ['"Just Me Again Down Here"', 'cursive'],
      }
    },
  },
  plugins: [],
};

