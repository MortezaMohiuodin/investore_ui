export const getCurrentUser = async () => {
  const { $medusa } = useNuxtApp();

  const currentUser = await $medusa.admin.auth.getSession();

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
  const { $medusa } = useNuxtApp();

  await $medusa.admin.auth.deleteSession();

  return;
};

export const doAdminJwtLogin = async (loginData) => {
  const { $medusa } = useNuxtApp();
  const body = {
    email: loginData.email,
    password: loginData.password,
  };
  const currentUser = await $medusa.admin.auth.getToken(body);

  return currentUser;
};
