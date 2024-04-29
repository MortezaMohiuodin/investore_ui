<template>
  <div class="relative rounded-lg shadow-lg w-[300px]">
    <NuxtImg
      :src="item.thumbnail"
      class="w-[300px] h-[150px] shadow-lg rounded-t-lg opacity-1 hover:opacity-75 transition duration-300 ease-in-out"
      format="webp"
    />
    <div class="p-3">
      <h5 class="font-bold text-lg mb-3 line-clamp-1">
        {{ item.title }}
      </h5>

      <div class="flex justify-between mt-3 mb-5">
        <span class="text-gray-800"
          >تومان : {{ item?.variants[0]?.prices[0]?.amount || 3000 }}</span
        >
      </div>
      <div class="flex gap-4">
        <ElButton
          class="mt-2 justify-center w-full sm"
          :to="`/product/${item.id}`"
          color="transparent"
        >
          جزئیات
        </ElButton>
        <ElButton
          class="mt-2 justify-center w-full sm"
          @click="emit('onBuy', item)"
        >
          افزودن به سبد
        </ElButton>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits("onBuy");
</script>
