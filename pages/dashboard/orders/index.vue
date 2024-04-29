<template>
  <PanelCard class="!shadow-lg">
    <h4>لیست سفارشات</h4>
    <ul class="mt-3">
      <li v-for="order in res?.orders?.reverse()" class="text-gray-500">
        {{ order.display_id }}
        {{ order.status }}
        {{ order.subtotal }}
      </li>
    </ul>
  </PanelCard>
</template>
<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth"],
});

const { $api } = useNuxtApp();

const res = await $api.getCustomerOrders();
console.log(res);
</script>
