<template>
  <NuxtImg
    src="img/icons/logo.png"
    :width="size"
    :height="size"
    @click="$router.push('/')"
  />
</template>
<script setup>
const props = defineProps({
  size: {
    type: [Number, String],
    default: 45,
  },
});
</script>
