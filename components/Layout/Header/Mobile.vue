<template>
  <div class="block md:hidden shadow dark:bg-gray-800">
    <nav class="container mx-auto mb-4">
      <div class="grid grid-cols-3 items-center mx-auto p-4">
        <div class="flex items-center">
          <ElButtonIcon
            type="button"
            @click="drawer = true"
            class="inline-flex items-center justify-center text-2xl text-gray-500 dark:text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-navbar"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <Icon name="heroicons:bars-3-bottom-right-solid" />
          </ElButtonIcon>
        </div>
        <div class="mx-auto">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <AppLogo />
          </a>
        </div>

        <div class="flex items-center justify-end">
          <ElButtonIcon>
            <Icon name="fe:cart" />
          </ElButtonIcon>
          <ElButtonIcon>
            <Icon name="material-symbols:account-circle-outline" />
          </ElButtonIcon>
        </div>
      </div>
    </nav>
  </div>
  <Transition name="slide">
    <div
      v-if="drawer"
      class="bg-white dark:text-white dark:bg-gray-800 w-full h-full fixed right-0 left-0 top-0"
      style="z-index: 1000"
    >
      <div class="flex justify-between py-10 px-8">
        <AppLogo />
        <ElButtonIcon
          type="button"
          @click="drawer = false"
          class="text-gray-400 bg-transparent rounded-lg text-2xl ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon name="fe:close" />
          <span class="sr-only">Close manu</span>
        </ElButtonIcon>
      </div>

      <ul
        class="flex px-7 flex-col font-medium mt-4 rounded-lg bg-white dark:bg-gray-700 dark:text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
      >
        <li v-for="item in MAIN_MENU" :key="item.name">
          <NuxtLink
            v-if="item.to"
            @click="drawer = false"
            :to="item.to"
            class="block py-2 px-3 md:p-0 rounded text-lg"
            aria-current="page"
            exactActiveClass="active-link"
            >{{ item.label }}</NuxtLink
          >
          <template v-else>
            <PanelAccordion>
              <span class="py-2 px-3 md:p-0 rounded text-lg dark:text-white">{{
                item.label
              }}</span>
              <template #body>
                <ul>
                  <NuxtLink
                    v-for="child in item.children"
                    :to="child.to"
                    @click="drawer = false"
                    class="block py-2 px-3 md:p-0 rounded text-lg text-gray-500 dark:text-gray-300 ms-7"
                    aria-current="page"
                    exactActiveClass="active-link"
                    >{{ child.label }}</NuxtLink
                  >
                </ul>
              </template>
            </PanelAccordion>
          </template>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { MAIN_MENU } from "~/utils/constants";
const drawer = ref(false);
</script>
<style>
.active-link {
  color: #1fb58c;
  border-color: #1fb58c;
}
</style>
