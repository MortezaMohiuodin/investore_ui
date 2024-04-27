export const getAdminProducts = async () => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.admin.products.list();

  return res;
};
