<template>
  <li class="player">
    {{ player.name }}
    <span class="player-score">{{ player.score }}</span>
  </li>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  player: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #22c55e /* green */;
}
.player-score {
  background-color: #F9F9F9;
  font-weight: bold;
  padding: 2px;
  width: 3rem;
  border: 1px solid #AAA;
  border-radius: 15px;
  text-align: center;
}
</style>
