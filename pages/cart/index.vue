<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-8">
      <PanelCard class="!shadow-lg">
        <h3 class="text-lg font-peyda-bold">سبد خرید</h3>
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
        </div>
      </PanelCard>
    </div>
    <div class="col-span-4">
      <PanelCard class="!shadow-lg">
        <h3 class="text-lg font-peyda-bold mb-5">پیش فاکتور</h3>
        <div>مجموع : 1000</div>
        <div class="text-left">
          <ElButton to="/checkout" class="sm mt-10"> صفحه ی خرید </ElButton>
        </div>
      </PanelCard>
    </div>
  </div>
</template>
<script setup>
const cart = useCart();
</script>
