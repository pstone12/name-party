<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';

document.body.style.overflow = 'hidden';

</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .icon-sm {
  width: 38px;
  height: 38px;
}
</style>
