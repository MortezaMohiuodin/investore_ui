<template>
  <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-12">
      <div
        class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg"
      >
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="p-4" v-if="hasCheckbox">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all" class="sr-only">checkbox</label>
                  </div>
                </th>

                <th
                  scope="col"
                  class="px-4 py-3"
                  v-for="column in columns"
                  :key="column.key"
                >
                  {{ column.label }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in tableData"
                :key="item.key"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td class="w-4 px-4 py-3" v-if="hasCheckbox">
                  <div class="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      onclick="event.stopPropagation()"
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" class="sr-only"
                      >checkbox</label
                    >
                  </div>
                </td>
                <td v-for="column in columns" :key="column.key" scope="row">
                  <template v-if="column.type === 'card'">
                    <div
                      class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        :src="
                          item[column.img_key ? column.img_key : 'img'] ||
                          'https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png'
                        "
                        class="w-auto h-8 mr-3"
                      />
                      {{ item[column.key] }}
                    </div>
                  </template>
                  <template v-else-if="column.type === 'chip'">
                    <div class="px-4 py-2">
                      <span
                        class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                        >{{ item[column.key] || "-" }}</span
                      >
                    </div>
                  </template>
                  <template v-else>
                    <div
                      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div class="flex items-center">
                        {{ item[column.key] || "-" }}
                      </div>
                    </div>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            نمایش
            <span class="font-semibold text-gray-900 dark:text-white"
              >1-10</span
            >
            از
            <span class="font-semibold text-gray-900 dark:text-white"
              >1000</span
            >
          </span>
          <!-- <DataPagination :totalItems="100" v-model="page" /> -->
        </nav>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  schema: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: null,
  },
  checkbox: {
    type: Boolean,
    default: false,
  },
});

const page = ref(1);

const columns = computed(() => {
  return props.schema;
});

const hasCheckbox = computed(() => {
  return props.checkbox;
});
const tableData = computed(() => {
  return props.data;
});
</script>
