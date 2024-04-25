<template>
  <div
    v-show="value"
    tabindex="-1"
    aria-hidden="true"
    :style="{ background: !value ? 'transparent' : '#00000017' }"
    :class="[value ? 'z-50 ' : 'z-0']"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100vh-1rem)] max-h-full"
  >
    <transition name="slide-up">
      <div
        v-if="value"
        ref="target"
        class="p-1 md:p-4 w-full max-h-full mx-auto"
        :style="{ width: props.bottomSheet || isMobile ? '100%' : props.width }"
        :class="[
          {
            'bottom-sheet': props.bottomSheet || isMobile,
            'mt-14': !props.bottomSheet,
          },
        ]"
      >
        <!-- Modal content -->
        <div
          class="relative bg-white dark:bg-gray-700 dark:text-white rounded-2xl md:rounded-lg md:shadow dark:bg-gray-700 dark:text-white"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ props.title }}
            </h3>
            <button
              type="button"
              @click="value = false"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <Icon name="fe:close" />
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <slot>
            <div class="p-4 md:p-5 space-y-4">
              <p
                class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              >
                {{ props.desc }}
              </p>
            </div>
          </slot>
          <!-- Modal footer -->
          <div
            v-if="props.actions"
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              :data-modal-hide="props.id"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              اعمال
            </button>
            <button
              :data-modal-hide="props.id"
              type="button"
              class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white dark:bg-gray-700 dark:text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              انصراف
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useVModel } from "@vueuse/core";
import { onClickOutside } from "@vueuse/core";
const { width } = useWindowSize();
const isMobile = computed(() => {
  return width.value < 900;
});
const target = ref(null);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  actions: {
    type: Boolean,
    default: false,
  },
  desc: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: "500px",
  },
  bottomSheet: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);

watch(value, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
});

onClickOutside(target, (event) => (value.value = false));
</script>

<style scoped>
.bottom-sheet {
  width: 100% !important;
  border-radius: 40px 40px 0 0;
  background-color: white;
  position: fixed;
  bottom: 0;
}
</style>
