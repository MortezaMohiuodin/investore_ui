const customModulesConfig = {
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
  nuxtIcon: {
    size: "30px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
  },
  swiper: {
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  proxy: {
    options: {
      target: "https://investore-back.liara.run",
      changeOrigin: true,
      pathFilter: ["/store"],
    },
  },
};
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      apiBase: "https://investore-back.liara.run" || "/api",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-snackbar",
    "@pinia/nuxt",
    "nuxt-proxy",
  ],
  ...customModulesConfig,
});
