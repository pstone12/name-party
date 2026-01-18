<script setup>
import GameRulesComponent from '@/components/game-components/GameRulesComponent.vue';
import GuessComponent from '@/components/game-components/GuessComponent.vue';
import ImageComponent from '@/components/game-components/ImageComponent.vue';
import PlayerListComponent from '@/components/game-components/PlayerListComponent.vue';
import LoadingComponent from '@/components/icons/LoadingComponent.vue';

import { ref, onMounted } from 'vue';


defineProps({
  gameId: {
    type: String,
    required: true
  }
})

const isGameReady = ref(false);

onMounted(() => {
  setTimeout(() => {
    isGameReady.value = true;
  }, 2000);
});


</script>

<template>
  <main v-if="isGameReady">
    <GameRulesComponent />

    <div id="game-area">
      <ImageComponent id='image' imageSrc="/assets/sample-image.png" imageAlt="Sample Image" />
      <GuessComponent />
    </div>

    <PlayerListComponent :gameId="gameId" />
  </main>
  <div id="loading" v-else>
    <LoadingComponent size="50" />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

main>* {
  margin: 1rem;
}

#game-area {
  margin: 2rem auto;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

#loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
