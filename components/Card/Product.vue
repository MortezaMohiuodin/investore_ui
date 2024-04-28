<template>
  <div class="relative rounded-lg shadow-lg w-[250px]">
    <NuxtImg
      :src="item.thumbnail"
      class="w-[250px] h-[150px] shadow-lg rounded-t-lg opacity-1 hover:opacity-75 transition duration-300 ease-in-out"
      format="webp"
    />
    <div class="p-3">
      <h5 class="font-bold text-lg mb-3 line-clamp-1">
        {{ item.title }} fadsfdasfsdafsad fasdkl;j sda;f jsd;lafj sdl;afjksdal
      </h5>
      <pre class="text-gray-500 mb-4">{{
        item?.variants[0]?.prices[0]?.amount
      }}</pre>
      <div class="flex justify-between mt-3">
        <span class="text-gray-800"
          >تومان : {{ item?.variants[0]?.prices[0]?.amount || 3000 }}</span
        >
      </div>
      <ElButton class="w-full mt-2 justify-center"> خرید </ElButton>
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
</script>
