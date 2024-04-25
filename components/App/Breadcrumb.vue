<template>
  <nav class="breadcrumb mx-8 my-4 md:my-7">
    <ul class="flex gap-2">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <li class="flex" v-if="crumb.label">
          <nuxt-link
            :to="crumb.to"
            class="text-base text-gray-400"
            :class="{ 'cursor-pointer': index === breadcrumbs.length - 1 }"
            >{{ crumb.label }}</nuxt-link
          >
          <Icon
            name="fe:arrow-right"
            color="lightgray"
            v-if="index !== breadcrumbs.length - 1"
          />
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup>
import { MAIN_MENU } from "~/utils/constants";
const menu = ref(MAIN_MENU);
const breadcrumbs = computed(() => {
  const route = useRoute();
  let url = "";
  let array = [];
  route.fullPath.split("/").forEach((value, index) => {
    if (index === 0) {
      array.push("/");
    } else {
      url = url + "/" + value;
      array.push(url);
    }
  });
  array = array.map((val) => {
    let obj = {
      label: "",
      to: "",
    };

    menu.value.some((item) => {
      if (item.children) {
        if (item.children.find((value) => value.to == val)) {
          obj = {
            label: item.children.find((value) => value.to == val)?.label,
            to: val,
          };
          return true;
        } else {
          return false;
        }
      } else {
        if (item.to == val) {
          obj = {
            label: item.label,
            to: item.to,
          };
          return true;
        } else {
          return false;
        }
      }
    });
    return obj;
  });
  return array.filter((val) => !!val.label);
});
</script>

<style scoped>
/* Add your breadcrumb styling here */
</style>
