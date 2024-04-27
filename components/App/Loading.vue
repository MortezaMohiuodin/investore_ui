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
  width: 50px;
  --b: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 70deg,
      #0000 71deg 90deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--b) - 1px),
      #000 calc(100% - var(--b))
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l5 1s infinite;
}
@keyframes l5 {
  to {
    transform: rotate(0.5turn);
  }
}
</style>
