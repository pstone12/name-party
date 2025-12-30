<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Image'
  }
});

</script>

<template>
  <div class="image-container">
    <img :src="imageSrc" :alt="imageAlt" />
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vw;
  width: 35vw;
  border: 2px solid #333;
  border-radius: 5px;

}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
