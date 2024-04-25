<template>
  <input
    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
    id="file_input"
    type="file"
    :value="file"
  />
</template>
<script setup>
import { useVModel } from "@vueuse/core";
const file = ref(null);
const props = defineProps({
  modelValue: { type: String, default: "" },
  options: { type: Array, default: [] },
});

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);
</script>
