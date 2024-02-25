<template>
  <div class="flex flex-col items-center">
    <!-- Step Indicators -->
    <div class="flex mb-15">
      <div
        v-for="(item, index) in items"
        :key="`step-${index}`"
        @click="currentStep = index"
        class="cursor-pointer mx-4"
      >
        <div :class="stepClass(index)">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- Step Content -->
    <div v-for="(item, index) in items" :key="`content-${index}`" class="w-1/2">
      <div v-show="currentStep === index" class="min-h-[350px]">
        <slot :name="`item.${index + 1}`"></slot>
      </div>
    </div>
    <!-- Step action -->
    <div class="step-actions">
      <button
        class="step-actions_button"
        @click="currentStep > 0 ? currentStep-- : currentStep"
        :disabled="currentStep === 0"
      >
        قبلی
      </button>
      <button
        class="step-actions_button"
        @click="currentStep < 2 ? currentStep++ : currentStep"
        :disabled="currentStep === 2 || !disabled"
      >
        بعدی
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: [];
  disabled?: boolean | number;
}

defineProps<Props>();

const currentStep = ref(0);

const stepClass = (index: number) => [
  "py-2 px-4 rounded-full",
  currentStep.value === index ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800",
];
</script>

<style scoped lang="scss">
.step-actions {
  @apply flex justify-around mt-8 w-full max-w-2xl;
}
.step-actions_button {
  @apply bg-primary py-2 px-4 mt-6 rounded-2xl text-white mx-auto hover:bg-purple disabled:bg-slate-400 disabled:cursor-not-allowed;
}
</style>
