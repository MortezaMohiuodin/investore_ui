<template>
  <nuxt-link
    type="button"
    class="btn cursor-pointer"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <slot />
    <slot name="icon"> </slot>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "base",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const buttonClass = computed(() => {
  if (props.color === "primary") {
    return "primary";
  } else if (props.color === "secondary") {
    return "secondary";
  } else {
    return "plain";
  }
});
</script>

<style scoped>
.btn {
  @apply text-center text-white py-2 font-medium focus:outline-none rounded-lg inline-flex gap-2 items-center border-2 border-transparent;
}
.xs {
  @apply px-3 py-2 text-xs;
}
.sm {
  @apply px-3 py-2 text-sm;
}
.base {
  @apply px-5 py-2.5 text-sm;
}
.lg {
  @apply px-5 py-3 text-base;
}
.xl {
  @apply px-6 py-3.5 text-base;
}
.primary {
  @apply bg-[#1FB58C] hover:bg-[#1FB58C] hover:bg-[#076f53];
}
.secondary {
  @apply text-gray-900 focus:outline-none bg-white dark:bg-gray-700 dark:text-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700;
}
.plain {
  @apply text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none;
}
</style>
