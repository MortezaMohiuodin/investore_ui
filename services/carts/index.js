export const createCart = async () => {
  try {
    return await medusaClient.carts.create();
  } catch (e) {
    console.log(e);
  }
};
export const getCart = async (cartId) => {
  try {
    return await medusaClient.carts.retrieve(cartId);
  } catch (e) {
    console.log(e);
  }
};

export const updateCart = async (cartId, newCart) => {
  try {
    return await medusaClient.carts.update(cartId, newCart);
  } catch (e) {
    console.log(e);
  }
};

export const completeCart = async (cartId) => {
  try {
    return await medusaClient.carts.complete(cartId);
  } catch (e) {
    console.log(e);
  }
};

export const addProductToCart = async (cartId, item) => {
  try {
    return await medusaClient.carts.lineItems.create(cartId, item);
  } catch (e) {
    console.log(e);
  }
};

export const updateProductInCart = async (cartId, itemId, item) => {
  try {
    return await medusaClient.carts.lineItems.update(cartId, itemId, item);
  } catch (e) {
    console.log(e);
  }
};

export const deleteProductFromCart = async (cartId, itemId) => {
  try {
    return await medusaClient.carts.lineItems.delete(cartId, itemId);
  } catch (e) {
    console.log(e);
  }
};
