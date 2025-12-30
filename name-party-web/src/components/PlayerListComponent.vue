<template>
  <div class="player-list">
    <h2>{{ gameId }}</h2>
    <ul>
      <li class="player" v-for="player in players" :key="player.id">{{ player.name }}<span class="player-score">{{ player.score }}</span></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
h2 {
  color: #333;
}

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
  background-color: #EEE;
  padding: 1rem;
  width: 20%;
  border-left: 3px solid #888;
}
.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
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
