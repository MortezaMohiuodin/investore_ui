<template>
  <div>
    <button
      type="button"
      @click="show = !show"
      class="bg-transparent w-full flex justify-between items-center text-base font-medium rtl:text-right text-gray-700 gap-3"
    >
      <slot />
      <Icon name="fe:arrow-right" :class="{ 'rotate-180': show }" />
    </button>
    <Transition name="fade">
      <div v-if="show" class="mt-3">
        <div class="dark:border-gray-700 dark:bg-gray-900">
          <slot name="body"> </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup>
const show = ref(false);
</script>
