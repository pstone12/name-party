<script setup>
import { ref } from 'vue';

const userGuess = ref('');
const canGuess = ref(true);

function submitGuess() {
  alert(`Your guess: ${userGuess.value}`);
  canGuess.value = false;
  setTimeout(() => {
    canGuess.value = true;
    userGuess.value = '';
    // Focus
  }, 1000);
}

</script>

<template>
    <input id="user-guess" :disabled="!canGuess" v-model="userGuess" type="text"  @keyup.enter="submitGuess"/>
</template>

<style scoped>
#user-guess {
  padding: 0.5rem;
  font-size: 1.2rem;
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  margin-top: 1rem;
}
</style>

