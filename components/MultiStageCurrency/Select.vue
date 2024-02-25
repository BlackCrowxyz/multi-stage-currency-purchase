<template>
  <div class="select_wrapper">
    <select v-model="model">
      <option disabled value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div class="arrow">
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string | number;
  label: string;
}
interface SelectProps {
  options: Option[];
  placeholder: string;
}

const model = defineModel();

defineProps<SelectProps>();
</script>

<style lang="scss" scoped>
.select_wrapper {
  @apply inline-block relative w-full my-2;
}

select {
  @apply block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none rounded-2;
}
.arrow {
  @apply pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700;
}
</style>
