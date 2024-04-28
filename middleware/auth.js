export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $api } = useNuxtApp();
  const user = await $api.getCurrentUser();
  if (user) return;
  else {
    return navigateTo("/auth/login", { redirectCode: 401 });
  }
});
