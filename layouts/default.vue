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
const auth = useAuth();
await callOnce(async () => {
  if (cart_id.value) {
    const res = await $api.getCart(cart_id.value);

    cart.value = res.cart;
  }
  if (auth.value && cart_id.value) {
    if (auth.value?.id !== cart.value?.customer_id) {
      const res = await $api.updateCart(cart.value.id, {
        customer_id: auth.value.id,
      });
      cart.value = res?.cart;
    }
  }
});
</script>
