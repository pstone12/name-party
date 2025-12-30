<script setup>

defineProps({
  gameId: {
    type: String,
    required: true
  }
})


</script>

<template>
  <main>
    <div :id="mainDiv">
      Game ID: {{ gameId }}
    </div>
  </main>
</template>

<style scoped>
#mainDiv {
  font-weight: bold;
  color: white;
}
</style>
