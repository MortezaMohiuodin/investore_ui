<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();
const { products } = await $api.getProducts();
console.log(products);
</script>
