<template>
  <div class="player-list">
    <h2>{{ gameId }}</h2>
    <ul>
      <PlayerComponent v-for="player in players" :key="player.id" :player="player" />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PlayerComponent from './PlayerComponent.vue';

defineProps({
  gameId: {
    type: String,
    required: true
  }
});

const players = ref([]);

onMounted(async () => {
  players.value = [
    { id: 1, name: 'Alice', score: 0 },
    { id: 2, name: 'Bob', score: 0 },
    { id: 3, name: 'Charlie', score: 0 }
  ];
});

</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.player-list {
  border-radius: 8px;
  background: #1a1f2b;
  padding: 1rem;
  width: 20%;
  border-left: 3px solid #80a28d /* green */;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  color: #e5e7eb;
}
</style>
