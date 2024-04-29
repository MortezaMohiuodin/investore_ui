<template>
  <div>
    <div class="p-5 shadow flex gap-10 mt-10">
      <div>
        <NuxtImg
          :src="item?.thumbnail"
          width="300"
          class="object-cover rounded-xl h-[200px]"
        />
      </div>
      <div class="relative w-full">
        <h3 class="text-gray-800 font-peyda-bold text-lg mt-3">
          {{ item?.title }}
        </h3>

        <p class="text-gray-500 max-w-[300px] line-clamp-4 mt-5">
          {{
            item?.description ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sapiente distinctio ducimus quos excepturi placeat voluptatem in est cum autem odio, neque nihil doloremque maiores cumque porro? Sed, suscipit officiis?"
          }}
        </p>
        <div class="flex items-center justify-between">
          <p class="text-gray-600 mt-5 ms-10">
            <span class="text-sm text-gray-900 font-peyda-bold">قیمت</span> :
            {{ item?.variants[0]?.prices[0]?.amount || "?" }}
            <span class="text-xs text-gray-400 ms-1">تومان</span>
          </p>
          <div>
            <ElButton
              class="mt-2 justify-center px-3"
              @click="handleBuyClick(item)"
            >
              افزودن به سبد
            </ElButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();
const route = useRoute();
const cart = useCart();

const item = ref({});
const res = await $api.getProduct(route?.params?.id);
if (res.product) {
  item.value = res.product;
}

const handleBuyClick = async (item) => {
  if (!cart.value) {
    const res = await $api.createCart();
    cart.value = res.cart;
    cart_id.value = cart.value.id;
  } else {
    const variant = item.variants[0];
    const res = await $api.addProductToCart(cart.value.id, {
      variant_id: variant.id,
      quantity: 1,
    });
    cart.value = res.cart;
  }
};
</script>
