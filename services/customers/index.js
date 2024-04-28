export const getCustomer = async () => {
  const currentCustomer = await medusaClient.customers.retrieve();
  return currentCustomer;
};

export const updateCustomer = async (customer) => {
  const res = await medusaClient.customers.update(customer);
  return res;
};

export const addShippingAddress = async () => {
  const res = await medusaClient.customers.addresses.addAddress({
    address: {
      first_name: "Celia",
      last_name: "Schumm",
      address_1: "225 Bednar Curve",
      city: "Danielville",
      country_code: "US",
      postal_code: "85137",
      phone: "981-596-6748 x90188",
      company: "Wyman LLC",
      province: "Georgia",
    },
  });

  return res;
};

export const updateShippingAddress = async (addressId) => {
  const res = await medusaClient.customers.addresses.updateAddres(addressId, {
    first_name: "Gina",
  });

  return res;
};

export const deleteShippingAddress = async (addressId) => {
  const res = await medusaClient.customers.addresses.deleteAddress(addressId);

  return res;
};

export const getCustomerOrders = async () => {
  const res = await medusaClient.customers.listOrders();

  return res;
};

export const resetPassword = async () => {
  const res = await medusaClient.customers.resetPassword({
    email: "user@example.com",
    password: "supersecret",
    token: "supersecrettoken",
  });
  return res;
};

export const requestResetPassword = async (email) => {
  const res = await medusaClient.customers.generatePasswordToken({
    email: email,
  });
  return res;
};
