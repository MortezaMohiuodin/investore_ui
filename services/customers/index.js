export const getCustomer = async () => {
  const { $medusa } = useNuxtApp();

  const currentCustomer = await $medusa.customers.retrieve();
  return currentCustomer;
};

export const updateCustomer = async (customer) => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.customers.update(customer);
  return res;
};

export const addShippingAddress = async () => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.customers.addresses.addAddress({
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
  const { $medusa } = useNuxtApp();

  const res = await $medusa.customers.addresses.updateAddres(addressId, {
    first_name: "Gina",
  });

  return res;
};

export const deleteShippingAddress = async (addressId) => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.customers.addresses.deleteAddress(addressId);

  return res;
};

export const getCustomerOrders = async () => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.customers.listOrders();

  return res;
};

export const resetPassword = async () => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.customers.resetPassword({
    email: "user@example.com",
    password: "supersecret",
    token: "supersecrettoken",
  });
  return res;
};

export const requestResetPassword = async (email) => {
  const { $medusa } = useNuxtApp();
  const res = await $medusa.customers.generatePasswordToken({
    email: email,
  });
  return res;
};
