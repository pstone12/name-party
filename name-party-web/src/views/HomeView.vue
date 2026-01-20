<script setup>
import { ref, watch } from 'vue';
import router from '../router/';


const existingGameId = ref('');

watch(existingGameId, (newValue) => {
  newValue = newValue.replace(/^[A-Z]{0,4}$/gm, '').toUpperCase();
  existingGameId.value = newValue.slice(0, 4);
});

// What the fuck ^^^

</script>


<template>
  <main>
    <h1 class="welcome-title">Welcome!</h1>

    <div class="select-game">
      <v-card class="w-500">
        <v-card-title>New Game</v-card-title>
        <v-card-text>
          Create a new game to get started.
        </v-card-text>
        <v-card-actions>
          <router-link :to="'/game'">Join Game</router-link>
        </v-card-actions>

      </v-card>



      <!-- Join Existing Game -->
      <v-card>
        <v-card-title>Join Existing Game</v-card-title>
        <v-card-text>
          <v-text-field
          @keydown.enter="router.push(`/game/${existingGameId}`)"
          v-model="existingGameId"
          label="Enter Game ID" width="300px"
          maxlength="4"
          />
        </v-card-text>
      </v-card>
    </div>





  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

.welcome-title {
  font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.03em;

  /* Gradient */
  background: linear-gradient(120deg,
      #d1d5db,
      /* light grey */
      #9ca3af,
      /* mid grey */
      #79bf93,
      /* green accent */
      #5ca577,
      /* darker green */
      #9ca3af);

  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  animation: fluidGradient 6s ease-in-out infinite;
}

.select-game {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
}

@keyframes fluidGradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
