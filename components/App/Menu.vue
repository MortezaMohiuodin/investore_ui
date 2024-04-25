<template>
  <div class="inline-flex gap-2 relative">
    <div @click="show = !show" ref="target">
      <slot name="trigger">
        <button>click</button>
      </slot>
    </div>
    <div
      v-show="show"
      class="py-3 absolute top-8 custom-shadow bg-white dark:bg-gray-700 dark:text-white z-10 divide-y divide-gray-100 rounded-lg shadow min-w-[150px] overflow-hidden"
    >
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onClickOutside } from "@vueuse/core";
const show = ref(false);
const target = ref(null);
onClickOutside(target, (event) => (show.value = false));
</script>
<style scoped>
.custom-shadow {
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>
