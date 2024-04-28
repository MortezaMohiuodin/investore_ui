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
      <ElButtonIcon @click="logout">
        <Icon name="ic:baseline-logout" />
      </ElButtonIcon>
    </div>
  </div>
</template>
<script setup>
const { $adminApi } = useNuxtApp();
import { toggleSidebar } from "./store";
const router = useRouter();
const token = useCookie("token");
const logout = async () => {
  try {
    await $adminApi.doAdminLogout();
    token.value = "";
    router.push("/admin/auth/login");
  } catch (e) {}
};
</script>
