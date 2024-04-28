<template>
  <div class="hidden md:block shadow-navbar shadow">
    <nav class="container mx-auto mb-4">
      <div class="flex flex-wrap justify-between items-center mx-auto p-4">
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <AppLogo />
        </NuxtLink>

        <div class="hidden md:block w-full md:w-auto">
          <ul
            class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li v-for="item in MAIN_MENU" :key="item.name">
              <NuxtLink
                v-if="!item.children"
                :to="item.to"
                exactActiveClass="active-link"
                class="pt-2 pb-1 border-b-[2px] border-transparent hover:border-green-200 translate-all"
                aria-current="page"
                >{{ item.label }}</NuxtLink
              >
              <div v-else>
                <AppMenu>
                  <template #trigger>
                    <span class="cursor-pointer">
                      <span
                        class="pt-2 pb-1 border-b-[2px] border-transparent"
                        aria-current="page"
                        >{{ item.label }}
                      </span>
                      <Icon name="fe:arrow-down" />
                    </span>
                  </template>
                  <ul>
                    <li v-for="child in item.children" :key="child.name">
                      <NuxtLink
                        :to="child.to"
                        exactActiveClass="active-link"
                        class="py-2 pointer block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        aria-current="page"
                        >{{ child.label }}</NuxtLink
                      >
                    </li>
                  </ul>
                </AppMenu>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex gap-2 items-center">
          <ElButtonIcon>
            <Icon name="fe:cart" />
          </ElButtonIcon>
          <!-- <ElButtonIcon to="auth/login">
            <Icon name="material-symbols:account-circle-outline" />
          </ElButtonIcon> -->
          <ElButton to="/auth/login" class="sm font-peyda-bold" color="plain">
            ورود / ثبت نام
          </ElButton>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { MAIN_MENU } from "~/utils/constants";
</script>
<style>
.active-link {
  color: #1fb58c;
  border-color: #1fb58c;
}
</style>
