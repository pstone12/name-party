<template>
  <div class="app-background">
    <div class="star-grid"></div>
  </div>
</template>

<style scoped>
.app-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background-color: #0f1115;
  /* dark neutral grey */
}

.star-grid {
  position: absolute;
  inset: -50%;
  transform: rotate(12deg);
}

.app-background::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: repeating-linear-gradient(135deg,
      rgba(255, 255, 255, 0.025),
      rgba(255, 255, 255, 0.025) 1px,
      transparent 1px,
      transparent 12px);

  opacity: 0.6;
}

.star-grid::after {
  content: "";
  position: absolute;
  inset: 0;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cpolygon points='90,20 106,64 154,64 116,92 130,138 90,110 50,138 64,92 26,64 74,64' fill='none' stroke='%2322c55e' stroke-opacity='0.016' stroke-width='7'/%3E%3C/svg%3E");

  background-repeat: repeat;
  background-size: 180px 180px;

  animation: starDrift 30s linear infinite;
  pointer-events: none;
}

@keyframes starDrift {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(260px, 260px);
  }
}
</style>
