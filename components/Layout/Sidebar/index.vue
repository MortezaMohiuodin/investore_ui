<template>
  <div>
    <div class="flex justify-center my-3">
      <AppLogo />
    </div>
    <ul class="flex px-7 flex-col font-medium mt-4 rounded-lg bg-white">
      <li v-for="item in props.items" :key="item.name">
        <NuxtLink
          v-if="item.to"
          @click="drawer = false"
          :to="item.to"
          class="inline-block py-2 rounded-xl text-lg w-full hover:bg-gray-50"
          aria-current="page"
          exactActiveClass="active-link"
        >
          <Icon
            class="me-3"
            :name="item.icon"
            v-if="item.icon"
            :size="25"
            color="gray"
          />

          <span v-show="sidebarOpen">{{ item.label }}</span></NuxtLink
        >
        <template v-else>
          <PanelAccordion>
            <span
              class="inline-block py-2 rounded-xl text-lg dark:text-white w-full hover:bg-gray-50"
            >
              <Icon
                class="me-3"
                :name="item.icon"
                v-if="item.icon"
                :size="25"
                color="gray"
              />

              <span v-show="sidebarOpen">{{ item.label }}</span>
            </span>
            <template #body>
              <ul>
                <NuxtLink
                  v-for="child in item.children"
                  :to="child.to"
                  @click="drawer = false"
                  class="block py-2 rounded text-lg text-gray-500 dark:text-gray-300 ms-7 hover:bg-gray-50"
                  aria-current="page"
                  exactActiveClass="active-link"
                >
                  <Icon
                    class="me-3"
                    :name="child.icon"
                    v-if="child.icon"
                    :size="25"
                    color="gray"
                  />
                  <span v-show="sidebarOpen">{{ child.label }}</span></NuxtLink
                >
              </ul>
            </template>
          </PanelAccordion>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { sidebarOpen } from "~/components/Dashboard/store";
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
