export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $adminApi } = useNuxtApp();
  const user = await $adminApi.getCurrentUser();
  if (user) return;
  else {
    return navigateTo("/admin/auth/login", { redirectCode: 401 });
  }
});
