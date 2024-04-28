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
  const headers = getRequestHeaders();
  const { $medusa } = useNuxtApp();
  try {
    return await $medusa.auth.getSession();
  } catch (e) {
    console.log(e);
  }
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
  const headers = getRequestHeaders();
  const { $medusa } = useNuxtApp();
  try {
    await $medusa.auth.deleteSession(headers);
    token.value = "";
  } catch (e) {}

  return;
};

export const checkEmailExist = async (email) => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.auth.exists(email);
  return res;
};
