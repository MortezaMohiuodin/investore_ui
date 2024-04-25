<template>
  <div class="flex gap-2 text-lg md:text-xl items-center my-2">
    <h3
      class="text-lg md:text-xl bg-[#EBF8F5] dark:bg-gray-900 py-3 px-5 font-peyda-bold text-nowrap border-r-4 border-primary dark:border-black"
    >
      <slot>
        {{ props.title }}
      </slot>
    </h3>
    <span
      class="line ms-5 me-2 bg-[#1FB58C] dark:bg-gray-900"
      :style="{ height: '2px' }"
    ></span>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#1FB58C",
  },
});
</script>

<style scoped>
.line {
  display: inline-block;
  width: 100%;

  height: 1px;
}
</style>
