<script setup>
import GameRulesComponent from '@/components/GameRulesComponent.vue';
import GuessComponent from '@/components/GuessComponent.vue';
import ImageComponent from '@/components/ImageComponent.vue';
import PlayerListComponent from '@/components/PlayerListComponent.vue';

defineProps({
  gameId: {
    type: String,
    required: true
  }
})

</script>

<template>
  <main>
    <GameRulesComponent />

    <div id="game-area">
      <ImageComponent id='image' imageSrc="/assets/sample-image.png" imageAlt="Sample Image" />
      <GuessComponent />
    </div>

    <PlayerListComponent :gameId="gameId" />
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: calc(100vh - 5vh);
  /* Adjust for header height */
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
</style>
