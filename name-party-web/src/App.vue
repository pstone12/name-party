<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import BackgroundComponent from './components/BackgroundComponent.vue';

document.body.style.overflow = 'hidden';

</script>

<template>
  <BackgroundComponent />
  <HeaderComponent />
  <RouterView />
</template>

<style>

  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  main {
    height: calc(100vh - 5vh); /* Adjust for header height */
  }

  .icon-sm {
  width: 38px;
  height: 38px;
}
</style>
