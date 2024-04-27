export const MAIN_MENU = [
  {
    name: "home",
    label: "صفحه اصلی",
    to: "/",
  },
  {
    name: "shop",
    label: "فروشگاه",
    to: "/shop",
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
    to: "/",
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
      { name: "productList", label: "لیست", to: "/products" },
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
