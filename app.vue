<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup>
const { $medusa } = useNuxtApp();
const { products } = await $medusa.products.list();
</script>
