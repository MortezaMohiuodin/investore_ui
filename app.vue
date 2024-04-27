<template>
  <div class="min-h-screen h-full relative font-peyda">
    <AppLoading v-if="$globalLoading" />
    <NuxtLayout />
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: { dir: "rtl", lang: "fa" },
});

const { $globalLoading } = useNuxtApp();
const { $api } = useNuxtApp();
const { products } = await $api.getProducts();
</script>
