export const getAdminProducts = async () => {
  const headers = getRequestHeaders();

  const res = await medusaClient.admin.products.list({}, headers);

  return res;
};
