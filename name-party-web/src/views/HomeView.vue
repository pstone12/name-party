<script setup>

</script>

<template>
  <main>
    <h1 class="welcome-title">Welcome!</h1>

    <router-link :to="'/game'">Join Game</router-link>
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
  background: linear-gradient(
    120deg,
    #d1d5db,   /* light grey */
    #9ca3af,   /* mid grey */
    #79bf93,   /* green accent */
    #5ca577,   /* darker green */
    #9ca3af
  );

  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  animation: fluidGradient 6s ease-in-out infinite;
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
