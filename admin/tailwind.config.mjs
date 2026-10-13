/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'admin-dark': '#000104',
        'admin-bg': '#F8F9FA'
      }
    },
  },
  plugins: [],
};

