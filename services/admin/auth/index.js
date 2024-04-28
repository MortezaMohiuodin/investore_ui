export const getCurrentUser = async () => {
  try {
    return await medusaClient.admin.auth.getSession();
  } catch (e) {
    console.log(e);
    return;
  }
};

export const doAdminLogin = async (loginData) => {
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const currentUser = await medusaClient.admin.auth.createSession(body);

  return currentUser;
};

export const doAdminLogout = async () => {
  await medusaClient.admin.auth.deleteSession();

  return;
};

export const doAdminJwtLogin = async (loginData) => {
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const currentUser = await medusaClient.admin.auth.getToken(body);

  return currentUser;
};
