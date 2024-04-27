import * as apiProducts from "./products";
import * as apiAuth from "./auth";
import * as apiCart from "./carts";
import * as apiCustomers from "./customers";

const api = {
  ...apiProducts,
  ...apiAuth,
  ...apiCart,
  ...apiCustomers,
};

export default api;
