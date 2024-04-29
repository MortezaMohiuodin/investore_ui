export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth();
  if (auth.value) {
    return;
  } else {
    return navigateTo("/auth/login", { redirectCode: 401 });
  }
});
