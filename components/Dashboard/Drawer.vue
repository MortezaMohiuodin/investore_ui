<template>
  <aside
    class="scrollbar top-0 bottom-0 h-screen bg-white dark:bg-gray-700 dark:text-white custom-shadow rounded-lg z-10 overflow-y-auto text-black lg:absolute lg:z-40 lg:block"
    :class="[
      style.mobileOrientation[mobileOrientation],
      sidebarOpen
        ? 'absolute z-40 w-8/12 transition-all duration-500 ease-in sm:w-5/12 md:w-[330px]'
        : 'hidden transition-all duration-700 ease-out lg:w-24',
    ]"
  >
    <slot />
  </aside>
</template>

<script setup lang="ts">
import { sidebarOpen, toggleSidebar } from "./store";

defineProps({
  mobileOrientation: {
    type: String,
    default: "end",
  },
});

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0 lg:left-0",
  },
};
</script>
<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* hide sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
}
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none; /* hide sidebar scrollbar on Firefox, IE and Edge*/
}
.custom-shadow {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
