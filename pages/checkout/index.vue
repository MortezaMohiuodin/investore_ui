<template>
  <div>
    {{ cart.payment_session }}
    <ElButton @click="handleCheckout"> Checkout </ElButton>
  </div>
</template>

<script setup>
const { $api } = useNuxtApp();
const snackbar = useSnackbar();
const cart = useCart();
const router = useRouter();
const cart_id = useCookie("cart_id");
await callOnce(async () => {
  if (!cart.value) return;
  const res = await $api.createPaymentSessions(cart.value.id);
  if (res.cart) cart.value = res.cart;
});

const handleCheckout = async () => {
  const res = await $api.completeCart(cart.value.id);
  if (res.response.status) {
    snackbar.add({
      type: "success",
      text: "سفارش با موفقیت ثبت شد",
    });
    cart.value = null;
    cart_id.value = null;
    setTimeout(() => {
      router.push("/dashboard");
    });
  }
};
</script>
