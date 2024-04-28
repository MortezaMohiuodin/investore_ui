export const createCart = async () => {
  const cart = await medusaClient.carts.create();
  return cart;
};
export const getCart = async (cartId) => {
  const cart = await medusaClient.carts.retrieve(cartId);
  return cart;
};

export const updateCart = async (cartId, newCart) => {
  const cart = await medusaClient.carts.update(cartId, newCart);
  return cart;
};

export const completeCart = async (cartId) => {
  const cart = await medusaClient.carts.complete(cartId);
  return cart;
};
