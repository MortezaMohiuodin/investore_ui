<template>
  <div><button @click="getUser">getUser</button></div>
  <button @click="test">test</button>
</template>
<script setup>
definePageMeta({
  layout: "admin",
});

const { $adminApi } = useNuxtApp();
const data = await $adminApi.getCurrentUser();

const test = () => {
  console.log(token.value, "token");
};
</script>
