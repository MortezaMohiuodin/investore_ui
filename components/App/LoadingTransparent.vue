<template>
  <div
    class="absolute left-0 top-0 right-0 bottom-0 z-50 bg-[#ffffff7d] select-none"
  >
    <div
      class="flex items-center justify-center w-full h-full gap-10 flex-col -mt-[40px]"
    >
      <div>
        <span class="loader"></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #1fb58c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
