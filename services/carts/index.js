export const createCart = async () => {
  const { $medusa } = useNuxtApp();

  const cart = await $medusa.carts.create();
  return cart;
};
export const getCart = async (cartId) => {
  const { $medusa } = useNuxtApp();

  const cart = await $medusa.carts.retrieve(cartId);
  return cart;
};

export const updateCart = async (cartId, newCart) => {
  const { $medusa } = useNuxtApp();

  const cart = await $medusa.carts.update(cartId, newCart);
  return cart;
};

export const completeCart = async (cartId) => {
  const { $medusa } = useNuxtApp();

  const cart = await $medusa.carts.complete(cartId);
  return cart;
};
