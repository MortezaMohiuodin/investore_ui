<template>
  <button
    type="button"
    :class="{ 'opacity-50': $attrs.disabled }"
    class="text-2xl border-2 border-transparent focus:outline-none font-medium rounded-full text-center hover:bg-gray-50 w-[40px] h-[40px]"
  >
    <slot />
    <span class="sr-only">Icon description</span>
  </button>
</template>
