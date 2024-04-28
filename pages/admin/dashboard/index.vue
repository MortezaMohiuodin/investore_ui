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
  middleware: ["admin-auth"],
});

const { $adminApi } = useNuxtApp();
const data = await $adminApi.getCurrentUser();

const test = () => {
  console.log(token.value, "token");
};
</script>
