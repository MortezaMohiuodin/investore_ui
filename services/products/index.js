import { useProducts, useCreateCart } from "@medusa-vue/core";

export const getProducts = async () => {
  const { $medusa } = useNuxtApp();
  // const res = useProducts();
  const res = await $medusa.products.list();

  return res;
};
