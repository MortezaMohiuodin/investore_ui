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
  const token = ref(useLocalStorage("token"));
  const { $medusa } = useNuxtApp();
  let authorization = `Bearer ${token.value}`;
  const currentUser = await $medusa.auth.getSession({
    authorization,
  });

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
  const token = ref(useLocalStorage("token"));
  const { $medusa } = useNuxtApp();
  try {
    await $medusa.auth.deleteSession({
      authorization: `Bearer ${token.value}`,
    });
    token.value = "";
  } catch (e) {}

  return;
};

export const checkEmailExist = async (email) => {
  const { $medusa } = useNuxtApp();

  const res = await $medusa.auth.exists(email);
  return res;
};
