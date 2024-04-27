<template>
  <div class="relative">
    <div
      v-if="slots.icon"
      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
    >
      <slot name="icon"> </slot>
    </div>
    <input
      :class="{ 'ps-10': slots.icon }"
      class="block w-full p-2 text-base text-gray-900 min-h-[20px] border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      v-model="value"
      v-bind="$attrs"
    />
    <p class="text-sm text-red-600 mt-2">
      {{ props.error }}
    </p>
  </div>
</template>
<script setup>
import { useVModel } from "@vueuse/core";
const slots = useSlots();
const props = defineProps({
  modelValue: { type: String, default: "" },
  error: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);
</script>
