export const getAdminProducts = async () => {
  const res = await medusaClient.admin.products.list({});

  return res;
};
