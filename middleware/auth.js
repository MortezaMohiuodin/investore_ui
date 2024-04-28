export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $api } = useNuxtApp();
  try {
    const user = await $api.getCurrentUser();
    return;
  } catch (e) {
    if (e?.response?.status) {
      return navigateTo("/auth/login");
    }
  }
});
