export const getProducts = async () => {
  try {
    return await medusaClient.products.list();
  } catch (e) {
    console.log(e);
  }
};

export const searchProducts = async (query) => {
  const res = await medusaClient.products.search({
    q: query,
  });

  return res;
};

export const getProduct = async (productId) => {
  const res = await medusaClient.products.retrieve(productId);
  return res;
};

export const getProductVariants = async () => {
  const res = await medusaClient.products.variants.list();
  return res;
};

export const getProductVariant = async (variantId) => {
  const res = await medusaClient.products.variants.retrieve(variantId);
  return res;
};

export const getProductCategories = async () => {
  const res = await medusaClient.productCategories.list();
  return res;
};

export const getProductCategory = async (productCategoryId) => {
  const res = await medusaClient.productCategories.retrieve(productCategoryId);
  return res;
};
