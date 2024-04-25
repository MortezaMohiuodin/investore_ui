<template>
  <div
    class="fixed left-0 top-0 w-screen h-screen z-50 bg-white dark:bg-gray-500 dark:text-white select-none"
  >
    <div
      class="flex items-center justify-center w-full h-full gap-10 flex-col -mt-[40px]"
    >
      <div class="text-center"></div>
      <div>
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  height: 4px;
  width: 130px;
  --c: no-repeat linear-gradient(#6100ee 0 0);
  background: var(--c), var(--c), #d7b8fc;
  background-size: 60% 100%;
  animation: l16 3s infinite;
}
@keyframes l16 {
  0% {
    background-position: -150% 0, -150% 0;
  }
  66% {
    background-position: 250% 0, -150% 0;
  }
  100% {
    background-position: 250% 0, 250% 0;
  }
}
</style>
