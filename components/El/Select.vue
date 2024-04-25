<template>
  <div class="flex gap-2 relative w-full" v-if="desktop">
    <div @click="show = !show" ref="target" class="w-full">
      <div
        class="cursor-pointer bg-gray-50 min-w-[150px] md:min-w-[200px] flex items-center justify-between border border-gray-200 text-gray-900 rounded-lg focus:ring-gray-300 focus:border-gray-300 w-full p-2.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <span v-if="value">
          {{ options.find((option) => option.value === value)?.label }}
        </span>
        <span v-else class="text-gray-400 text-sm"> لطفا انتخاب کنید </span>
        <Icon name="fe:arrow-right" />
      </div>
    </div>

    <div
      v-show="show"
      class="min-w-[150px] md:min-w-[200px] w-full py-3 absolute top-14 border border-gray-300 bg-white dark:bg-gray-700 dark:text-white z-10 divide-y divide-gray-100 rounded-lg shodaw-lg overflow-hidden"
    >
      <ul class="text-gray-700 dark:text-gray-200">
        <li
          v-for="option in options"
          :key="option.value"
          @click="value = option.value"
        >
          <span
            :class="{ 'text-green-500': value === option.value }"
            @click="locale = 'fa'"
            class="cursor-pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >{{ option.label }}</span
          >
        </li>
      </ul>
    </div>
  </div>

  <select
    v-else
    v-model="value"
    class="min-w-[150px] md:min-w-[200px] border border-gray-200 text-gray-900 rounded-sm focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option
      v-for="item in options"
      :value="item.value"
      :key="item.value"
      :selected="value === item.value"
    >
      {{ item.label || item.value }}
    </option>
  </select>
</template>
<script setup>
import { useVModel } from "@vueuse/core";
import { onClickOutside } from "@vueuse/core";
const show = ref(false);
const target = ref(null);
onClickOutside(target, (event) => (show.value = false));

const props = defineProps({
  modelValue: { type: String, default: "" },
  options: { type: Array, default: [] },
});

const emit = defineEmits(["update:modelValue"]);
const desktop = ref(true);
const value = useVModel(props, "modelValue", emit);
</script>
