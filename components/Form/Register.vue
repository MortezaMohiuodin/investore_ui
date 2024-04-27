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
            >ثبت نام
          </ElButton>
        </div>
      </template>
    </FeatureForm>
    <p class="mt-3 text-sm">
      قبلا ثبت نام کرده اید؟
      <NuxtLink to="/auth/login" class="text-blue-500">وارد شوید</NuxtLink>
    </p>
  </PanelCard>
</template>
<script setup>
import { object, string, number } from "yup";
import { signUp } from "~/services/auth";
const snackbar = useSnackbar();
const form = ref({});
const loading = ref(false);
const emit = defineEmits(["onSubmit", "onCancel"]);
const schema = computed(() => {
  let array = [
    {
      model: "firstname",
      component: "input",
      title: "نام",
      required: true,
      col: "col-span-12",
    },
    {
      model: "lastname",
      component: "input",
      title: "نام خانوادگی",
      required: true,
      col: "col-span-12",
    },
    {
      model: "email",
      component: "input",
      title: "ایمیل",
      required: true,
      type: "email",
      col: "col-span-12",
    },
    {
      model: "phone",
      component: "input",
      title: "شماره همراه",
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
  firstname: string().required(),
  lastname: string().required(),
  email: string().required().email("ایمیل را به درستی وارد کنید!"),
  phone: number().required(),
  password: string().required(),
});

const submit = async () => {
  loading.value = true;
  try {
    await signUp(form.value);

    loading.value = false;
    snackbar.add({
      type: "success",
      text: "ثبت نام با موفقیت انجام شد",
    });
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
