<template>
  <div class="flex justify-between shadow p-3">
    <div>
      <ElButtonIcon @click="toggleSidebar">
        <Icon name="heroicons:bars-3-bottom-right-20-solid" />
      </ElButtonIcon>
    </div>
    <div class="flex gap-2">
      <ElButtonIcon>
        <Icon name="material-symbols:account-circle-outline" />
      </ElButtonIcon>
      <ElButtonIcon>
        <Icon name="ic:baseline-logout" />
      </ElButtonIcon>
    </div>
  </div>
</template>
<script setup>
import { toggleSidebar } from "./store";
</script>
