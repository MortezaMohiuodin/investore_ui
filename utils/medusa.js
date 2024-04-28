import Medusa from "@medusajs/medusa-js";

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
export const medusaClient = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 2,
});
