<script setup>
import { defineProps } from 'vue';

defineProps({
  size: {
    type: Number,
    default: 24
  }
});
</script>

<template>
  <svg class="spinner" viewBox="0 0 24 24" fill="none" :width="size" :height="size" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 12a7.5 7.5 0 0112.9-5.303M19.5 12a7.5 7.5 0 01-12.9 5.303"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped>
.spinner {
  color: #EEE;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
