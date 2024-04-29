<template>
  <div class="bg-white">
    <LayoutHeader />
    <div class="container mx-auto min-h-[600px] md:min-h-[700px]">
      <NuxtPage />
    </div>

    <LayoutFooter />
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();
const cart_id = useCookie("cart_id");

const cart = useCart();

await callOnce(async () => {
  if (cart_id.value) {
    const res = await $api.getCart(cart_id.value);
    cart.value = res.cart;
  }
});
</script>
