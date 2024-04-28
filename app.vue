<template>
  <div class="min-h-screen h-full relative font-peyda">
    <AppLoading v-if="$globalLoading" />
    <NuxtLayout />
    <NuxtSnackbar messageClass="custom-snackbar" />
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: { dir: "rtl", lang: "fa" },
});
const { $globalLoading, $api } = useNuxtApp();
</script>
