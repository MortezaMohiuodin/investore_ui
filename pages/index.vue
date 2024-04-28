<template>
  <div class="py-3">
    <h3 class="text-2xl font-peyda-bold text-center mb-7">محصولات</h3>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-2 gap-y-10">
      <CardProduct
        v-for="product in products"
        :item="product"
        :key="product.id"
      />
    </div>
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();

const { products } = await $api.getProducts();
</script>
