<template>
  <Dashboard>
    <template #sidebar>
      <LayoutSidebar :items="ADMIN_MENU" />
    </template>
    <div>
      <DashboardNavbar>
        <ElButtonIcon>
          <Icon name="material-symbols:account-circle-outline" />
        </ElButtonIcon>
        <ElButtonIcon @click="logout">
          <Icon name="ic:baseline-logout" />
        </ElButtonIcon>
      </DashboardNavbar>
      <NuxtPage />
    </div>
  </Dashboard>
</template>

<script setup>
import { ADMIN_MENU } from "@/utils/constants";
const { $adminApi } = useNuxtApp();
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
