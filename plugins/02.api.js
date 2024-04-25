import api from "~/services";
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      api: api,
    },
  };
});
