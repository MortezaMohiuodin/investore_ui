<template>
  <div class="relative h-full">
    <DashboardOverlay class="md:hidden" />
    <DashboardDrawer mobile-orientation="end">
      <slot name="sidebar"> </slot>
    </DashboardDrawer>
    <div
      class="flex w-full flex-col pl-0 lg:space-y-4 lg:ps-24"
      :class="
        sidebarOpen
          ? 'transition-all duration-500 ease-in lg:!ps-[350px]'
          : 'transition-all duration-700 ease-out'
      "
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { toggleSidebar, sidebarOpen } from "@/components/Dashboard/store";

definePageMeta({
  layout: "blank",
});
</script>
