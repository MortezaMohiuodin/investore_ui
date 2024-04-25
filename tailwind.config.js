/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {},
      animation: {},
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  safelist: [],
  plugins: [],
};
