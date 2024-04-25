export const getProducts = async () => {
  const { $medusa } = useNuxtApp();
  const data = await $medusa.products.list();
  return data;
};
