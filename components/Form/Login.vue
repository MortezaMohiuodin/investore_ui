<template>
  <PanelCard class="mx-auto">
    <AppLoadingTransparent v-if="loading" />
    <div class="flex justify-center mb-6">
      <AppLogo />
    </div>
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
    <p class="mt-3 text-sm">
      عضو نیستید؟
      <NuxtLink to="/auth/register" class="text-blue-500"
        >ثبت نام کنید</NuxtLink
      >
    </p>
  </PanelCard>
</template>
<script setup>
import { object, string } from "yup";
const snackbar = useSnackbar();
const form = ref({});
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

const submit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    snackbar.add({
      type: "success",
      text: " با موفقیت ارسال شد ",
    });
  }, 2000);
};
</script>
