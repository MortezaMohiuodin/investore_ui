export const signUp = async (customerData) => {
  const body = {
    first_name: customerData.firstName,
    last_name: customerData.lastName,
    email: customerData.email,
    password: customerData.password,
  };
  const res = await medusaClient.customers.create(body);
  return res;
};
export const getCurrentUser = async () => {
  const headers = getMedusaHeaders(["auth"]);

  try {
    return await medusaClient.auth.getSession(headers);
  } catch (e) {
    console.log(e);
  }
};

export const doLogin = async (loginData) => {
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const user = await medusaClient.auth.authenticate(body);

  return user;
};

export const doJwtLogin = async (loginData) => {
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const user = await medusaClient.auth.getToken(body);

  return user;
};

export const doLogout = async () => {
  try {
    await medusaClient.auth.deleteSession();
    token.value = "";
  } catch (e) {}

  return;
};

export const checkEmailExist = async (email) => {
  const res = await medusaClient.auth.exists(email);
  return res;
};
