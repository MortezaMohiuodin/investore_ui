import Medusa from "@medusajs/medusa-js";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const client = new Medusa({
    baseUrl: config.public.apiBase,
    maxRetries: 2,
  });

  return {
    provide: {
      medusa: client,
    },
  };
});
