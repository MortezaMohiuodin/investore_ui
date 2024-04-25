<template>
  <Swiper
    class="rounded-xl"
    :modules="[
      SwiperAutoplay,
      SwiperController,
      SwiperNavigation,
      SwiperPagination,
    ]"
    navigation
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    v-bind="$attrs"
  >
    <SwiperSlide v-for="slide in props.items" :key="slide">
      <slot v-bind="{ item: slide }">
        <div>
          {{ slide }}
        </div>
      </slot>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss">
.default-swiper {
  .swiper-button-prev,
  .swiper-button-next {
    color: white !important;
    @apply hidden md:flex;
  }

  .swiper-button-next {
    width: 40px !important;
    height: 40px !important;
    border-radius: 6px;
    background-color: #1fb58c;
    text-align: center;
    position: relative;
    right: initial;
    left: initial;
    display: inline-flex;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    right: 50%;
    transform: translate(50%, 0);
  }
  .swiper-button-next::after {
    font-size: 18px !important;
    position: relative;
    right: 2px;
  }
  .swiper-button-prev {
    width: 40px !important;
    height: 40px !important;
    border-radius: 6px;
    background-color: #1fb58c;
    text-align: center;
    position: relative;
    right: initial;
    left: initial;
    display: inline-flex;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    margin-left: 10px;
    right: 50%;
    transform: translate(50%, 0);
  }
  .swiper-button-prev::after {
    font-size: 18px !important;
    position: relative;
    left: 2px;
  }
}

.banner-swiper {
  .swiper-button-prev,
  .swiper-button-next {
    color: white !important;
    @apply hidden md:flex;
  }
  .swiper-pagination-bullet-active {
    background: white !important;
  }
  .swiper-button-next {
    width: 40px !important;
    height: 40px !important;
    border: 1px solid rgb(194, 194, 194);
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    margin-left: 10px;
    transition: all 0.1s linear;
    &:hover {
      &::after {
        color: black;
      }
      background-color: rgba(255, 255, 255, 1);
    }
  }
  .swiper-button-next::after {
    font-size: 18px !important;
    position: relative;
    right: 2px;
  }
  .swiper-button-prev {
    margin-right: 10px;
    width: 40px !important;
    height: 40px !important;
    border: 1px solid rgb(194, 194, 194);
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.2);
    text-align: center;
    transition: all 0.1s linear;
    &:hover {
      &::after {
        color: black;
      }
      background-color: rgba(255, 255, 255, 1);
    }
  }

  .swiper-button-prev::after {
    font-size: 18px !important;
    position: relative;
    left: 2px;
  }
  .swiper-pagination {
    display: inline-flex !important;
    justify-content: center !important;
    width: auto !important;
    margin: auto !important;
    left: 50% !important;
    min-width: 160px;
    transform: translate(-50%, 0) !important;
    align-items: center;
    background: url("../../img/patterns/swiper-bg.png");
    background-repeat: no-repeat;
    padding: 8px 20px;
    bottom: 0px !important;
  }

  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background-color: #6f7171 !important;
  }
  .swiper-pagination-bullet-active {
    width: 16px !important;
    height: 16px !important;
    background-color: #1fb58c !important;
  }
}
</style>
