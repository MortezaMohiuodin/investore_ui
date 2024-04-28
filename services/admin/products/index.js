export const getAdminProducts = async () => {
  const headers = getRequestHeaders();
  const { $medusa } = useNuxtApp();
  const res = await $medusa.admin.products.list({}, headers);

  return res;
};
