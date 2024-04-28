<template>
  <div>
    <DataTable :schema="schema" :data="data" />
  </div>
</template>
<script setup>
const data = ref([]);

const schema = ref([
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Email",
    key: "email",
    type: "chip",
  },
]);

const { $adminApi } = useNuxtApp();
const res = await $adminApi.getCurrentUser();
console.log(res);
definePageMeta({
  layout: "admin",
});
</script>
