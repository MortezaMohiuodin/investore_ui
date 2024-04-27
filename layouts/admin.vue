<template>
  <Dashboard>
    <template #sidebar>
      <LayoutSidebar :items="ADMIN_MENU" />
    </template>
    <div>
      <DashboardNavbar />
      <NuxtPage />
    </div>
  </Dashboard>
</template>
<script setup>
import { ADMIN_MENU } from "@/utils/constants";
</script>
