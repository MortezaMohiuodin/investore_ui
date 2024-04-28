export const getCurrentUser = async () => {
  const { $medusa } = useNuxtApp();
  const headers = getRequestHeaders();
  const currentUser = await $medusa.admin.auth.getSession(headers);

  return currentUser;
};

export const doAdminLogin = async (loginData) => {
  const { $medusa } = useNuxtApp();
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const currentUser = await $medusa.admin.auth.createSession(body);

  return currentUser;
};

export const doAdminLogout = async () => {
  const headers = getRequestHeaders();
  const { $medusa } = useNuxtApp();

  await $medusa.admin.auth.deleteSession(headers);

  return;
};

export const doAdminJwtLogin = async (loginData) => {
  const { $medusa } = useNuxtApp();
  const headers = getRequestHeaders();
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const currentUser = await $medusa.admin.auth.getToken(body, headers);

  return currentUser;
};
