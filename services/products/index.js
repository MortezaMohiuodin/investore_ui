import { useProducts, useCreateCart } from "@medusa-vue/core";

export const getProducts = async () => {
  // const { $medusa } = useNuxtApp();
  const res = useProducts();
  // const data = await $medusa.products.list();

  return res;
};

export const emptyCart = async () => {
  const createCart = useCreateCart();
  createCart.mutate({});
  return createCart;
};
