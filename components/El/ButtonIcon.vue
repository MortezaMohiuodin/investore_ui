<template>
  <button
    type="button"
    :class="{ 'opacity-50': $attrs.disabled }"
    class="border-2 border-transparent focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
  >
    <slot />
    <span class="sr-only">Icon description</span>
  </button>
</template>
