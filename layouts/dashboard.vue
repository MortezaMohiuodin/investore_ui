<template>
  <Dashboard>
    <template #sidebar>
      <LayoutSidebar :items="CUSTOMER_MENU" />
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
import { CUSTOMER_MENU } from "@/utils/constants";

const { $api } = useNuxtApp();
const router = useRouter();
const token = useCookie("token");
const logout = async () => {
  try {
    await $api.doLogout();
    token.value = "";
    router.push("/auth/login");
  } catch (e) {}
};
</script>
