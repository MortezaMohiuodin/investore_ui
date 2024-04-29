export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $api } = useNuxtApp();
  const auth = useAuth();
  const res = await $api.getCurrentUser();
  if (res?.customer) {
    auth.value = res.customer;
  }
  return;
});
