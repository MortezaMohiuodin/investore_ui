<template>
  <div>
    <AppMenu>
      <template #trigger>
        <div class="relative">
          <span
            v-if="cart?.items?.length"
            class="cursor-pointer text-white bg-blue-300 text-sm rounded-full shadow-sm inline-flex items-center justify-center -right-3 top-3 absolute min-w-[24px]"
          >
            {{ cart?.items?.length }}
          </span>
          <ElButtonIcon> <Icon name="fe:cart" size="30" /></ElButtonIcon>
        </div>
      </template>
      <div class="w-[400px] p-4 pt-2">
        <AppLoadingTransparent v-if="loading" />
        <h4 class="text-lg text-gray-600 text-center font-peyda-bold mb-4">
          سبد خرید
        </h4>
        <div v-if="cart?.items?.length">
          <ul>
            <li class="grid grid-cols-12 gap-3 pb-2">
              <span class="text-green-700 col-span-5 text-sm"> محصول </span>
              <span class="text-green-700 col-span-3 text-sm"> قیمت</span>
              <span class="text-green-700 col-span-2 text-sm"> تعداد </span>
              <span class="text-green-700 col-span-2 text-sm"> </span>
            </li>
            <li
              v-for="item in cart.items"
              :key="item.id"
              class="grid grid-cols-12 items-center gap-3 hover:bg-gray-50 py-2 px-2 rounded-xl"
            >
              <div class="col-span-5 text-sm text-gray-800">
                {{ item.title }}
              </div>
              <div class="col-span-3 text-sm text-gray-800">
                {{ item.unit_price }}
                <span class="text-sm text-gray-500">ریال</span>
              </div>
              <div class="col-span-2 text-sm text-gray-800">
                {{ item.quantity }}
                <span class="text-sm text-gray-500">عدد</span>
              </div>
              <div class="col-span-2 text-sm text-gray-800">
                <ElButtonIcon @click="handleDelete(item)">
                  <Icon name="ph:trash" class="hover:text-red-500" />
                </ElButtonIcon>
              </div>
            </li>
          </ul>
          <div class="text-left mt-3">
            <ElButton class="sm justify-center">
              <template #icon>
                <Icon name="fe:arrow-left" />
              </template>
              مرحله بعد
            </ElButton>
          </div>
        </div>

        <div v-else class="text-gray-500 text-center">سبد خرید خالی است!</div>
      </div>
    </AppMenu>
  </div>
</template>
<script setup>
const { $api } = useNuxtApp();
const cart = useCart();
const loading = ref(false);
const handleDelete = async (item) => {
  loading.value = true;
  const res = await $api.deleteProductFromCart(cart.value.id, item.id);
  if (res?.response?.status === 200) {
    cart.value = res.cart;
  }
  loading.value = false;
};
</script>
