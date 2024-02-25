<template>
  <input v-model="model" v-model-limit.limit="limit" :type :placeholder />
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { limitDecimalPlaces } from "~/helpers/utils";

const emit = defineEmits(["update:modelValue"]);

interface InputProps {
  modelValue: string | number;
  placeholder?: string;
  type?: string;
  limit?: number;
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: "اینجا بنویسید",
  type: "text",
  limit: 4,
});

const model = computed({
  get() {
    return limitDecimalPlaces(props.modelValue, props.limit);
  },
  set(v: any) {
    if (props.limit !== 0) emit("update:modelValue", limitDecimalPlaces(v, props.limit));
    else emit("update:modelValue", v);
  },
});
</script>

<style lang="scss" scoped>
input {
  @apply mt-2 mb-6 block p-2 rounded-2 w-full;
}
</style>
