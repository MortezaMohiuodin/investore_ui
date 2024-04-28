import Medusa from "@medusajs/medusa-js";
export const getMedusaHeaders = (tags = []) => {
  const token = useCookie("token");

  const headers = {
    next: {
      tags,
    },
  };

  if (token.value) {
    headers.authorization = `Bearer ${token.value}`;
  } else {
    headers.authorization = "";
  }

  return headers;
};
export const medusaClient = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 2,
});
