<template>
  <div class="grid grid-cols-5">
    <CardProduct
      v-for="product in products"
      :item="product"
      :key="product.id"
    />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "admin",
});

const { $adminApi } = useNuxtApp();
const data = await $adminApi.getCurrentUser();
const { products } = await $adminApi.getAdminProducts();

const test = () => {
  console.log(token.value, "token");
};
</script>
