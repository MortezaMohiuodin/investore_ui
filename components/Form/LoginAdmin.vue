<template>
  <PanelCard class="mx-auto">
    <AppLoadingTransparent v-if="loading" />
    <div class="flex justify-center mb-6">
      <AppLogo />
    </div>
    <p class="text-center mb-6 text-xl">ADMIN</p>
    <FeatureForm
      v-model="form"
      :schema="schema"
      :loading="loading"
      :yupSchema="yupSchema"
      @on-submit="submit"
    >
      <template #actions="{ onSubmit }">
        <div class="mt-3">
          <ElButton @click="onSubmit" class="w-full justify-center"
            >ورود
          </ElButton>
        </div>
      </template>
    </FeatureForm>
  </PanelCard>
</template>
<script setup>
import { object, string } from "yup";
const token = useCookie("token");
const snackbar = useSnackbar();
const form = ref({});
const router = useRouter();
const loading = ref(false);
const emit = defineEmits(["onSubmit", "onCancel"]);
const schema = computed(() => {
  let array = [
    {
      model: "email",
      component: "input",
      title: "ایمیل",
      required: true,
      type: "email",
      col: "col-span-12",
    },
    {
      model: "password",
      component: "input",
      title: "رمز عبور",
      required: true,
      type: "password",
      col: "col-span-12",
    },
  ];

  return array;
});

const yupSchema = object().shape({
  email: string().required().email("ایمیل را به درستی وارد کنید!"),
  password: string().required(),
});

const submit = async () => {
  const { $adminApi } = useNuxtApp();
  loading.value = true;
  try {
    const res = await $adminApi.doAdminJwtLogin(form.value);
    token.value = res.access_token;

    router.push("/admin/dashboard");
  } catch (e) {
    snackbar.add({
      type: "error",
      text: "اطلاعات وارد شده صحیح نیست",
    });
  } finally {
    loading.value = false;
  }
};
</script>
