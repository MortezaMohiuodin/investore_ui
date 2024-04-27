import api from "~/services";
import adminApi from "~/services/admin";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      api: api,
      adminApi: adminApi,
    },
  };
});
