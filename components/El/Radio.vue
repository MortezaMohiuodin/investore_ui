<template>
  <div
    class="flex items-center mb-4"
    v-for="option in options"
    :key="option.value"
  >
    <input
      v-model="value"
      :id="`radio-${option.value}`"
      type="radio"
      :value="option.value"
      :checked="value === option.value"
      :name="`radio-${option.value}`"
      class="w-4 h-4 text-green-500 bg-gray-100 border-gray-300 focus:ring-0 cursor-pointer"
    />
    <label
      :for="`radio-${option.value}`"
      class="ms-2 font-medium text-gray-500 dark:text-gray-300 cursor-pointer"
      >{{ option.label }}</label
    >
  </div>
</template>
<script setup>
import { useVModel } from "@vueuse/core";
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  label: "",
  options: { type: Array, default: [] },
});

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);
</script>
