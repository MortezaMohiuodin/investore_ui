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

definePageMeta({
  layout: "admin",
});
</script>
