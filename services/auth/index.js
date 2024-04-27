export const signUp = async (customerData) => {
  const { $medusa } = useNuxtApp();
  const body = {
    first_name: customerData.firstName,
    last_name: customerData.lastName,
    email: customerData.email,
    password: customerData.password,
  };
  const res = await $medusa.customers.create(body);
  return res;
};
