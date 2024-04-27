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
export const getCurrentUser = async () => {
  const { $medusa } = useNuxtApp();

  const currentUser = await $medusa.auth.getSession();

  return currentUser;
};

export const doLogin = async (loginData) => {
  const { $medusa } = useNuxtApp();
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const user = await $medusa.auth.authenticate(body);

  return user;
};

export const doJwtLogin = async (loginData) => {
  const { $medusa } = useNuxtApp();
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const user = await $medusa.auth.getToken(body);

  return user;
};

export const doLogout = async () => {
  const { $medusa } = useNuxtApp();
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  await $medusa.auth.deleteSession();

  return;
};

export const checkEmailExist = async (email) => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.auth.exists(email);
  return res;
};
