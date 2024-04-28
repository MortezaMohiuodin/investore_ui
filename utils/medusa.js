export const getRequestHeaders = () => {
  const token = ref(useLocalStorage("token"));
  let authorization;
  if (token.value) {
    authorization = `Bearer ${token}`;
  } else {
    authorization = "";
  }
  return {
    authorization,
  };
};
