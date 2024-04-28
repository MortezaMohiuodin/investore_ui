import * as apiProducts from "./products";
import * as apiAuth from "./auth";

const api = {
  ...apiProducts,
  ...apiAuth,
};

export default api;
