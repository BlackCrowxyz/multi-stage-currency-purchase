<template>
  <div>Hello</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const slider = ref(0);
const slides = ref<number[]>([0, 1, 2]);
</script>

<style lang="scss"></style>
