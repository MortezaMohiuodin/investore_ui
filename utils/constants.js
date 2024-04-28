export const MAIN_MENU = [
  {
    name: "home",
    label: "صفحه اصلی",
    to: "/",
  },
  {
    name: "marketplace",
    label: "فروشگاه",
    to: "/marketplace",
  },
  {
    name: "blog",
    label: "بلاگ",
    to: "/blog",
  },
  {
    name: "contact",
    label: "ارتباط با ما",
    to: "/contact",
  },
];

export const ADMIN_MENU = [
  {
    name: "dashboard",
    label: "داشبورد",
    to: "/admin/dashboard",
    icon: "material-symbols:dashboard",
  },
  {
    name: "users",
    label: "کاربران",
    to: "/users",
    icon: "ph:users-fill",
  },
  {
    name: "products",
    label: "محصولات",
    icon: "ri:product-hunt-fill",
    children: [
      { name: "productList", label: "لیست", to: "/admin/dashboard/products" },
      { name: "productListArchive", label: "آرشیو", to: "/products-archives" },
    ],
  },
  {
    name: "categories",
    label: "دسته بندی ها",
    to: "/categories",
    icon: "material-symbols:category",
  },
];
export const CUSTOMER_MENU = [
  {
    name: "dashboard",
    label: "داشبورد",
    to: "/dashboard",
    icon: "material-symbols:dashboard",
  },
  {
    name: "orders",
    label: "سفارشات",
    to: "/dashboard/orders",
    icon: "ri:product-hunt-fill",
  },
];
