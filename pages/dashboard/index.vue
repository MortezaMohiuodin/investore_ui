<template>
  <div>
    <button @click="doTest">test</button>
    <button @click="logout">Logout</button>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "dashboard",
});
const router = useRouter();
const { $api } = useNuxtApp();
const doTest = async () => {
  const user = await $api.getCurrentUser();
  console.log(user, "user");
};
const logout = async () => {
  try {
    const user = await $api.doLogout();
    router.push("/auth/login");
  } catch (e) {
    console.log(e);
  }
};
</script>
