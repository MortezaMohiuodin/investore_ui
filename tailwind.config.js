/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        peyda: ["PeydaWeb", "system-ui"],
        "peyda-thin": ["PeydaWebThin", "system-ui"],
        "peyda-bold": ["PeydaWebBold", "system-ui"],
      },
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
