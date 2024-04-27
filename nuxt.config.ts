const customModulesConfig = {
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000
  },
  nuxtIcon: {
    size: '30px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  }
}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Private keys are only available on the server
    // apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-swiper",
    "@nuxt/image",
    'nuxt-icon',
    'nuxt-snackbar'
  ],
  ...customModulesConfig
})

