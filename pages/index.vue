<template>
  <div class="py-3">
    <h3 class="text-2xl font-peyda-bold text-center mb-7">محصولات</h3>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-2 gap-y-10">
      <CardProduct
        v-for="product in products"
        :item="product"
        :key="product.id"
        @on-buy="handleBuyClick"
      />
    </div>
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();
const { products } = await $api.getProducts();
const auth = useAuth();
const cart = useCart();
const cart_id = useCookie("cart_id");

const handleBuyClick = async (item) => {
  if (!cart.value) {
    const res = await $api.createCart();
    cart.value = res.cart;
    cart_id.value = cart.value.id;
  }
  const variant = item.variants[0];
  const res = await $api.addProductToCart(cart.value.id, {
    variant_id: variant.id,
    quantity: 1,
  });
  cart.value = res.cart;
};
</script>
