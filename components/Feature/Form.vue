<template>
  <form v-bind="$attrs" @submit.prevent="onSubmit">
    <div class="mx-auto h-full" :style="{ maxWidth: width }">
      <!-- Form Title -->
      <h3 v-if="title" class="text-lg mt-3">
        {{ title ? title : $route.meta.title }}
      </h3>
      <!-- Form Description -->
      <p v-if="desc" class="mb-3">
        {{ desc }}
      </p>
      <!-- Form wrapper , can be either card or simple div -->
      <div>
        <div
          :style="{
            maxWidth: innerWidth ? innerWidth : 'initial',
            margin: innerWidth ? 'auto' : 'initial',
          }"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 gap-2">
            <!-- Iterating through schema -->
            <template v-for="(field, index) in formSchema" :key="field.uuid">
              <!-- Condition to exist in form , default is true -->
              <div :class="field.col">
                <template v-if="field.condition">
                  <!-- Before slot for field -->
                  <template v-if="hasSlot(`before.${field.model}`)">
                    <slot :name="`before.${field.model}`" />
                  </template>
                  <!-- Condition to be visible in form , default is true -->
                  <div v-show="field.visible">
                    <!-- If field name does not have slot generate it based on schema -->
                    <template v-if="!hasSlot(field.model)">
                      <div
                        v-if="modelsVisibility[field.model]"
                        :style="{ maxWidth: field.width }"
                      >
                        <label
                          v-if="field.title"
                          :for="field.uuid"
                          class="text-sm text-gray-500"
                          >{{ field.title }}</label
                        >
                        <label
                          v-else-if="field.label"
                          :for="field.uuid"
                          class="text-sm text-gray-500"
                          >{{ field.label }}</label
                        >
                        <component
                          :is="field.component"
                          :id="field.key"
                          @blur="validate(field.model)"
                          @keypress="validate(field.model)"
                          :model-value="value[field.model]"
                          v-bind="field"
                          :error="errors[field.model]"
                          @update:model-value="
                            (val) => updateFormValue(field.model, val)
                          "
                        />
                      </div>
                    </template>
                    <!-- else generate field based on slot and pass scope -->
                    <template v-else>
                      <slot
                        :name="field.model"
                        v-bind="{ formValue: value, updateFormValue, field }"
                      />
                    </template>
                  </div>
                  <!-- After slot for field -->
                  <template v-if="hasSlot(`after.${field.model}`)">
                    <slot :name="`after.${field.model}`" />
                  </template>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <slot name="actions" v-bind="{ onSubmit }"> </slot>
  </form>
</template>

<script setup>
import ElementInput from "@/components/El/Input.vue";
import ElementCheckbox from "@/components/El/Checkbox.vue";
import ElementSelect from "@/components/El/Select.vue";
import ElementTextarea from "@/components/El/Textarea.vue";

const props = defineProps({
  // form model
  modelValue: { type: Object, default: () => ({}) },
  // An Object defining form fields
  schema: { type: Array, default: () => [], required: true },
  // Wrapper be a card or div
  withCard: { type: Boolean, default: true },
  // Form width
  width: { type: [String, Number], default: null },
  // Form inner width
  innerWidth: { type: [String, Number], default: null },
  loading: { type: Boolean, default: false, required: false },
  // Show Actions buttons for form
  actions: { type: Boolean, default: true, required: false },
  cancelActions: { type: Boolean, default: true, required: false },
  confirmBtnProp: { type: Object, default: () => {}, required: false },
  title: { type: String, default: null },
  desc: { type: String, default: null },
  // Whether validate form or not
  validation: { type: Boolean, default: true, required: false },
  yupSchema: { type: Object, default: null, required: false },
});

const emit = defineEmits(["onSubmit", "update:modelValue", "onCancel"]);
const errors = ref({});
const slots = useSlots();
const value = useVModel(props, "modelValue", emit);
const modelsVisibility = ref({});
const isValid = ref(false);
const formActions = ref(null);
const { width: formActionWidth } = useElementSize(formActions);

const COLS_DEFAULT = (val) => {
  if (
    val.component !== "radio" &&
    val.component !== "radio-group" &&
    val.component !== "checkbox" &&
    val.component !== "alert"
  )
    return { cols: "12", sm: "12", md: "6", lg: "4", xl: "3" };
  else return { cols: "12" };
};

const updateFormValue = (key, val) => {
  value.value[key] = val;
};

const onCancel = () => {
  emit("onCancel");
};

const hasSlot = (name) => {
  return !!slots[name];
};

const attrs = useAttrs();

const wrapperProps = computed(() => {
  return props.width
    ? {
        class: "p-2 lg:p-4 mx-auto h-full",
        style: { maxWidth: props.width },
      }
    : { class: "p-2 lg:p-4 h-full" };
});

const formSchema = computed({
  get() {
    return props.schema.map((val) => {
      let col;
      let uuid = new Date().getDate();
      let component;
      let condition;
      let visible;
      let required;
      if (typeof val.component === "string") {
        if (val.component === "input") {
          component = ElementInput;
        } else if (val.component === "select") {
          component = ElementSelect;
        } else if (val.component === "checkbox") {
          component = ElementCheckbox;
        } else if (val.component === "textarea") {
          component = ElementTextarea;
        } else {
          component = ElementInput;
        }
      } else {
        component = val.component;
      }
      col = val.col ? val.col : "col-span-6";
      if (typeof val.condition === "function") {
        condition = val.condition(value.value);
      } else if (typeof val.condition === "boolean") {
        condition = val.condition;
      } else condition = true;
      if (typeof val.visible === "function") {
        visible = val.visible(value.value);
      } else if (typeof val.visible === "boolean") {
        visible = val.visible;
      } else visible = true;
      if (typeof val.required === "function") {
        required = val.required(value.value);
      } else if (typeof val.required === "boolean") {
        required = val.required;
      } else required = true;

      return {
        ...val,
        uuid,
        col,
        condition,
        component,
        visible,
      };
    });
  },
  set(val) {},
});

const updateFieldShow = (val, key) => {
  if (!val) value.value[key] = null;
  modelsVisibility.value[key] = val;
};
const onSubmit = () => {
  let isValid = false;
  if (props.yupSchema) {
    props.yupSchema
      .validate(value.value, { abortEarly: false })
      .then(() => {
        errors.value = {};
        emit("onSubmit", value.value);
      })
      .catch((err) => {
        isValid = false;
        err.inner.forEach((error) => {
          errors.value[error.path] = error.message;
        });
        return;
      });
  } else {
    emit("onSubmit", value.value);
  }
};
watch(
  formSchema,
  () => {
    let object = {};
    formSchema.value.forEach((val) => {
      if (!val.checkboxGuard) {
        object[val.model] = true;
      } else if (value.value[val.model]) {
        object[val.model] = true;
      } else {
        object[val.model] = false;
      }
    });

    modelsVisibility.value = object;
  },
  { immediate: true }
);
const validate = (field) => {
  if (!props.yupSchema.fields[field]) return;
  props.yupSchema
    .validateAt(field, value.value)
    .then(() => {
      errors.value[field] = "";
    })
    .catch((err) => {
      errors.value[field] = err.message;
      /*
            {
              errors: ["email is a required field"],
              inner: [],
              message: "email is a required field",
              name: "ValidationError",
              params: {path: "email", value: "", originalValue: "", label: undefined},
              path: "email",
              type: "required",
              value: "",
              // ..
            }
          */
    });
};
defineExpose({ onSubmit, isValid });
</script>
