export const getProducts = async () => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.products.list();

  return res;
};

export const searchProducts = async (query) => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.products.search({
    q: query,
  });

  return res;
};

export const getProduct = async (productId) => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.products.retrieve(productId);
  return res;
};

export const getProductVariants = async () => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.products.variants.list();
  return res;
};

export const getProductVariant = async (variantId) => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.products.variants.retrieve(variantId);
  return res;
};

export const getProductCategories = async () => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.productCategories.list();
  return res;
};

export const getProductCategory = async (productCategoryId) => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.productCategories.retrieve(productCategoryId);
  return res;
};
