<template>
  <!-- If the type prop is 'button' following template will render -->
  <ul class="pagination">
    <!-- Go back to first page Button -->
    <li v-if="showEndingButtons && firstPageButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(isRtl ? totalPages : 1)"
        @click.prevent="onClickHandler(isRtl ? totalPages : 1)"
        :class="[disablePagination ? '!opacity-50' : '']"
        :disabled="disablePagination"
      >
        <slot name="first-page-button">
          {{ firstPageContent }}
        </slot>
      </component>
    </li>

    <!-- Backward Jump Button -->
    <li v-if="showJumpButtons && startingBreakPointButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[
          disablePagination ? '!opacity-50' : '',
          disablePagination ? '!opacity-50' : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="backward-jump-button">
          {{ backwardJumpButtonContent }}
        </slot>
      </component>
    </li>

    <!-- Back Button -->
    <li v-if="!hidePrevNext && backButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(isRtl ? currentPageRef + 1 : currentPageRef - 1)
        "
        @click.prevent="
          onClickHandler(isRtl ? currentPageRef + 1 : currentPageRef - 1)
        "
        :class="['!border-0', disablePagination ? '!opacity-10' : '']"
        :disabled="disablePagination"
      >
        <Icon name="fe:arrow-right" />
      </component>
    </li>

    <!-- First Button before Starting Breakpoint Button -->
    <li
      v-if="showBreakpointButtons && firstButtonIfCondition"
      class="fa-number"
    >
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(isRtl ? totalPages : 1)"
        @click.prevent="onClickHandler(isRtl ? totalPages : 1)"
        :class="[
          disablePagination ? 'opacity-10' : '',
          disablePagination ? '!opacity-10' : '',
        ]"
        :disabled="disablePagination"
      >
        {{ isRtl ? NumbersLocale(totalPages) : NumbersLocale(1) }}
      </component>
    </li>

    <!-- Starting Breakpoint Button -->
    <li
      v-if="showBreakpointButtons && startingBreakPointButtonIfCondition"
      class="fa-number"
    >
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef + Math.ceil(maxPagesShown / 2)
              : currentPageRef - Math.ceil(maxPagesShown / 2)
          )
        "
        :disabled="disableBreakpointButtons || disablePagination"
        :class="[
          disableBreakpointButtons || disablePagination
            ? `${disabledPaginateButtonsClass} ${disabledBreakPointButtonClass}`
            : '',
        ]"
      >
        <slot name="starting-breakpoint-button">
          {{ startingBreakpointContent }}
        </slot>
      </component>
    </li>

    <!-- Numbers Buttons -->
    <li v-for="(page, index) in paginate.pages" :key="index" class="fa-number">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(page)"
        @click.prevent="() => onClickHandler(page)"
        :class="[
          paginateButtonsClass,
          numberButtonsClass,
          page === currentPageRef ? 'text-primary ring-2' : '',
          disablePagination ? 'opacity-50' : '',
        ]"
        :disabled="disablePagination"
      >
        {{ NumbersLocale(page) }}
      </component>
    </li>

    <!-- Ending Breakpoint Button -->
    <li
      v-if="showBreakpointButtons && endingBreakPointButtonIfCondition"
      class="fa-number"
    >
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            disableBreakpointButtons
              ? currentPageRef
              : isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        :disabled="disableBreakpointButtons || disablePagination"
        :class="[
          endingBreakPointButtonClass,
          paginateButtonsClass,
          disableBreakpointButtons || disablePagination
            ? `${disabledPaginateButtonsClass} ${disabledBreakPointButtonClass}`
            : '',
        ]"
      >
        <slot name="ending-breakpoint-button">
          {{ endingBreakpointButtonContent }}
        </slot>
      </component>
    </li>

    <!-- Last Button after Ending Breakingpoint Button-->
    <li v-if="showBreakpointButtons && lastButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(isRtl ? 1 : totalPages)"
        @click.prevent="onClickHandler(isRtl ? 1 : totalPages)"
        :class="[
          lastButtonClass,
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? disabledLastButtonClass : '',
        ]"
        :disabled="disablePagination"
      >
        {{ isRtl ? NumbersLocale(1) : NumbersLocale(totalPages) }}
      </component>
    </li>

    <!-- Next Button -->
    <li v-if="!hidePrevNext && nextButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(isRtl ? currentPageRef - 1 : currentPageRef + 1)
        "
        @click.prevent="
          onClickHandler(isRtl ? currentPageRef - 1 : currentPageRef + 1)
        "
        :class="[
          '!border-0',
          nextButtonClass,
          disablePagination ? disabledPaginateButtonsClass : '',
          disablePagination ? '!opacity-10' : '',
          ,
        ]"
        :disabled="disablePagination"
      >
        <Icon name="fe:arrow-left" />
      </component>
    </li>

    <!-- Forward Jump Button -->
    <li v-if="showJumpButtons && endingBreakPointButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="
          navigationHandler(
            isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        @click.prevent="
          onClickHandler(
            isRtl
              ? currentPageRef - Math.ceil(maxPagesShown / 2)
              : currentPageRef + Math.ceil(maxPagesShown / 2)
          )
        "
        :class="[
          disablePagination ? 'opacity-10' : '',
          disablePagination ? 'opacity-10' : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="forward-jump-button">
          {{ forwardJumpButtonContent }}
        </slot>
      </component>
    </li>

    <!-- Go forward to last page -->
    <li v-if="showEndingButtons && lastPageButtonIfCondition">
      <component
        :is="type === 'button' ? 'button' : 'a'"
        :href="navigationHandler(isRtl ? 1 : totalPages)"
        @click.prevent="onClickHandler(isRtl ? 1 : totalPages)"
        :class="[
          paginateButtonsClass,
          disablePagination ? disabledPaginateButtonsClass : '',
        ]"
        :disabled="disablePagination"
      >
        <slot name="last-page-button">
          {{ lastPageContent }}
        </slot>
      </component>
    </li>
  </ul>
</template>

<script setup>
import { toRef } from "vue";
import { computed } from "vue";

// -------------------- //
// ---> Properties <--- //
// -------------------- //
const props = defineProps({
  // Configuration props
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
    validator: (value) => {
      if (value <= 0) {
        const message = "itemsPerPage attribute must be greater than 0.";
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  currentPage: {
    type: Number,
    default: 1,
    validator: (value) => {
      const message = "currentPage attribute must be greater than 0.";
      if (value <= 0) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  modelValue: {
    type: Number,
    required: true,
    validator: (value) => {
      const message = "v-model is required and must be greater than 0.";
      if (value <= 0) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  maxPagesShown: {
    type: Number,
    default: 5,
    validator: (value) => {
      const message = "maxPagesShown attribute must be greater than 0.";
      if (value <= 0) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  dir: {
    type: String,
    default: "ltr",
    validator: (value) => {
      const message = 'dir attribute must be either "ltr" or "rtl".';
      if (value !== "ltr" && value !== "rtl") {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  type: {
    type: String,
    default: "button",
    validator: (value) => {
      const validTypess = ["link", "button"];
      const message =
        "type attribute must be one of the following: " +
        validTypess.join(", ");
      if (validTypess.indexOf(value) === -1) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  locale: {
    type: String,
    default: "en",
    validator: (value) => {
      const validLocales = ["en", "ar", "ir"];
      const message =
        "locale attribute must be one of the following: " +
        validLocales.join(", ");
      if (validLocales.indexOf(value) === -1) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  prevButtonContent: {
    type: String,
    default: "<",
  },
  nextButtonContent: {
    type: String,
    default: ">",
  },
  hidePrevNext: {
    type: Boolean,
    default: false,
  },
  hidePrevNextWhenEnds: {
    type: Boolean,
    default: false,
  },
  showBreakpointButtons: {
    type: Boolean,
    default: true,
  },
  disableBreakpointButtons: {
    type: Boolean,
    default: false,
  },
  startingBreakpointContent: {
    type: String,
    default: "...",
  },
  endingBreakpointButtonContent: {
    type: String,
    default: "...",
  },
  showJumpButtons: {
    type: Boolean,
    default: false,
  },
  linkUrl: {
    type: String,
    default: "#",
  },
  backwardJumpButtonContent: {
    type: String,
    default: "<<",
  },
  forwardJumpButtonContent: {
    type: String,
    default: ">>",
  },
  disablePagination: {
    type: Boolean,
    default: false,
  },
  showEndingButtons: {
    type: Boolean,
    default: false,
  },
  firstPageContent: {
    type: String,
    default: "First",
  },
  lastPageContent: {
    type: String,
    default: "Last",
  },

  // Class props
  backButtonClass: {
    type: String,
    default: "back-button",
  },
  nextButtonClass: {
    type: String,
    default: "next-button",
  },
  firstButtonClass: {
    type: String,
    default: "first-button",
  },
  lastButtonClass: {
    type: String,
    default: "last-button",
  },
  numberButtonsClass: {
    type: String,
    default: "number-buttons",
  },
  startingBreakpointButtonClass: {
    type: String,
    default: "starting-breakpoint-button",
  },
  endingBreakPointButtonClass: {
    type: String,
    default: "ending-breakpoint-button",
  },
  firstPageButtonClass: {
    type: String,
    default: "first-page-button",
  },
  lastPageButtonClass: {
    type: String,
    default: "last-page-button",
  },

  // use this selector above all the other selectors because of css specificity
  paginateButtonsClass: {
    type: String,
    default: "paginate-buttons",
  },
  disabledPaginateButtonsClass: {
    type: String,
    default: "disabled-paginate-buttons",
  },
  activePageClass: {
    type: String,
    default: "active-page",
  },
  paginationContainerClass: {
    type: String,
    default: "pagination-container",
  },
  disabledBreakPointButtonClass: {
    type: String,
    default: "disabled-breakpoint-button",
  },
  backwardJumpButtonClass: {
    type: String,
    default: "backward-jump-button",
  },
  forwardJumpButtonClass: {
    type: String,
    default: "forward-jump-button",
  },
  disabledBackwardJumpButtonClass: {
    type: String,
    default: "disabled-backward-jump-button",
  },
  disabledBackButtonClass: {
    type: String,
    default: "disabled-back-button",
  },
  disabledFirstButtonClass: {
    type: String,
    default: "disabled-first-button",
  },
  disabledLastButtonClass: {
    type: String,
    default: "disabled-last-button",
  },
  disabledNextButtonClass: {
    type: String,
    default: "disabled-next-button",
  },
  disabledForwardJumpButtonClass: {
    type: String,
    default: "disabled-forward-jump-button",
  },
});

if (props.currentPage && !props.modelValue) {
  throw new Error(
    "currentPage/current-page is now deprecated, use v-model instead to set the current page."
  );
}

if (!props.modelValue) {
  throw new TypeError(`v-model is required for the paginate component.`);
}

// -------------- //
// ---> Refs <--- //
// -------------- //
const currentPageRef = toRef(props, "modelValue");

// ---------------- //
// ---> Events <--- //
// ---------------- //
const emit = defineEmits(["update:modelValue"]);

// ----------------- //
// ---> Methods <--- //
// ----------------- //
const onClickHandler = (number) => {
  // if number is equal to the current page, do nothing
  if (number === currentPageRef.value) return;

  // if number is greater than the total pages, do nothing
  if (number > totalPages.value) return;

  // if number is less than 1, do nothing
  if (number < 1) return;

  // if pagination is disabled, do nothing
  if (props.disablePagination) return;

  emit("update:modelValue", number);
  props.onClick(number);
};
const NumbersLocale = (number) => {
  switch (props.locale) {
    case "en":
      return number;
    case "ar":
      return number.toLocaleString("ar-SA");
    case "ir":
      return number.toLocaleString("fa-IR");
    default:
      return number;
  }
};
const navigationHandler = (page) => {
  if (props.type !== "link") return "";
  return props.linkUrl.replace("[page]", page.toString());
};

// ----------------------------- //
// ---> Computed properties <--- //
// ----------------------------- //
//calculating total pages
const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);
// Pagination logic
const paginate = computed(() => {
  let startPage, endPage;
  // if total pages are less than maximum pages to be displayed (maxPagesShown), then show all pages
  if (totalPages.value <= props.maxPagesShown) {
    startPage = 1;
    endPage = totalPages.value;
  } else {
    // total pages is more than maxPagesShown...
    // calculating start and end pages
    let maxPagesShownBeforeCurrentPage = Math.floor(props.maxPagesShown / 2);
    let maxPagesShownAfterCurrentPage = Math.ceil(props.maxPagesShown / 2) - 1;
    if (currentPageRef.value <= maxPagesShownBeforeCurrentPage) {
      // current page is at the start of the pagination
      startPage = 1;
      endPage = props.maxPagesShown;
    } else if (
      currentPageRef.value + maxPagesShownAfterCurrentPage >=
      totalPages.value
    ) {
      // current page is at the end of the pagination
      startPage = totalPages.value - props.maxPagesShown + 1;
      endPage = totalPages.value;
    } else {
      // current page is somewhere in the middle of the pagination
      startPage = currentPageRef.value - maxPagesShownBeforeCurrentPage;
      endPage = currentPageRef.value + maxPagesShownAfterCurrentPage;
    }
  }
  // create an array of pages to be displayed
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  if (props.dir === "rtl") {
    pages = pages.reverse();
  }

  return {
    totalItems: props.totalItems,
    currentPage: currentPageRef.value,
    itemsPerPage: props.itemsPerPage,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    pages: pages,
  };
});
// rtl check
const isRtl = computed(() => props.dir === "rtl");

// ---------------------------------- //
// ---> Components If Conditions <--- //
// ---------------------------------- //
const backButtonIfCondition = computed(() => {
  if (isRtl.value)
    return (
      !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages.value
    );

  return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;
});
const nextButtonIfCondition = computed(() => {
  if (isRtl.value)
    return !props.hidePrevNextWhenEnds || currentPageRef.value !== 1;

  return (
    !props.hidePrevNextWhenEnds || currentPageRef.value !== totalPages.value
  );
});
const startingBreakPointButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[0] < totalPages.value - 1;
  }

  return paginate.value.pages[0] >= 3;
});
const endingBreakPointButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[paginate.value.pages.length - 1] >= 3;
  }

  return (
    paginate.value.pages[paginate.value.pages.length - 1] < totalPages.value - 1
  );
});
const firstButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[0] < totalPages.value;
  }

  return paginate.value.pages[0] >= 2;
});
const lastButtonIfCondition = computed(() => {
  if (isRtl.value) {
    return paginate.value.pages[paginate.value.pages.length - 1] >= 2;
  }

  return (
    paginate.value.pages[paginate.value.pages.length - 1] < totalPages.value
  );
});
const firstPageButtonIfCondition = computed(() => {
  if (currentPageRef.value === 1) return false;
  return true;
});
const lastPageButtonIfCondition = computed(() => {
  if (currentPageRef.value === totalPages.value) return false;
  return true;
});

// --------------------------- //
// ---> Validations Check <--- //
// --------------------------- //
// current page can't be greater than total pages
// if (currentPageRef.value > totalPages) {
//   console.log("currentPage must be less than or equal to totalPages.");
//   throw new TypeError(`currentPage must be less than or equal to totalPages.`);
// }

// if type attribute is link, then linkUrl attribute is required
if (props.type === "link" && props.linkUrl === "#") {
  console.error(`linkUrl attribute is required if type attribute is 'link'`);
  throw new TypeError(
    `linkUrl attribute is required if type attribute is 'link'`
  );
}

// if type attribute is link, then linkUrl string must contain "[page]"
if (props.type === "link" && !props.linkUrl.includes("[page]")) {
  console.error(`linkUrl attribute must contain '[page]' substring`);
  throw new TypeError(`linkUrl attribute must contain '[page]' substring`);
}
</script>

<style>
ul.pagination {
  /* resetting default stylings for ul tag */
  padding-inline-start: 0;
  list-style-type: none;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;
  justify-content: center;
  margin-top: 20px !important ;
}

ul.pagination li button,
ul.pagination li a {
  /* resetting default stylings for a tag */
  text-decoration: none;
  width: 35px;
  height: 35px;
  background: white;
  display: flex;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  margin: 5px;
  justify-content: center;
  align-items: center;
}
</style>
