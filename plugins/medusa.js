import Medusa from "@medusajs/medusa-js";

export default defineNuxtPlugin((nuxtApp) => {
  const client = new Medusa({
    baseUrl: "http://localhost:9000",
    maxRetries: 2,
  });
  return {
    provide: {
      medusa: client,
    },
  };
});
