<template>
  <Dashboard>
    <template #sidebar>
      <LayoutSidebar :items="CUSTOMER_MENU" />
    </template>
    <div>
      <DashboardNavbar />
      <NuxtPage />
    </div>
  </Dashboard>
</template>
<script setup>
import { CUSTOMER_MENU } from "@/utils/constants";
</script>
