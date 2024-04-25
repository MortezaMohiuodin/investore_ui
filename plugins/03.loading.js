export default defineNuxtPlugin((nuxtApp) => {
  const appLoading = ref(true);
  nuxtApp.hook("page:start", () => {
    appLoading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    appLoading.value = false;
  });
  return {
    provide: {
      globalLoading: appLoading,
    },
  };
});
