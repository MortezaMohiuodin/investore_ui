export const getRequestHeaders = () => {
  const token = useCookie("token");
  let authorization;
  if (token.value) {
    authorization = `Bearer ${token.value}`;
  } else {
    authorization = "";
  }
  return {
    authorization,
  };
};
