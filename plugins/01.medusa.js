import Medusa from "@medusajs/medusa-js";
import { createMedusaVueClient } from "@medusa-vue/core";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  // const client = new Medusa({
  //   baseUrl: config.public.apiBase,
  //   maxRetries: 2,
  // });
  const client = createMedusaVueClient({
    baseUrl: config.public.apiBase,
    maxRetries: 2,
    // apiKey : '',
    // publishableApiKey : '',
  });
  nuxtApp.vueApp.use(client);

  return {
    provide: {
      medusa: client,
    },
  };
});
