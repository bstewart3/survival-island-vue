<template>
  <div class="splash-screen">
    <div class="splash-text">
      <h1>Welcome to Survival island</h1>
      <h2>Explore at your own risk..</h2>
    </div>
    <div class="splash-image">
      <img
        src="../assets/survival-island.jpg"
        alt="Survival Island Splash"
        class="islandImage"
      />
    </div>
  </div>
</template>

<script>
import survivalIsland from "../assets/survival-island.jpg";

export default {};
</script>

<style>
html,
body {
  margin: 0;
  height: 100vh;
}

.splash-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 100vh;
}

.splash-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.splash-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .splash-screen {
    grid-template-columns: 1fr;
  }
}

.islandImage {
  width: 600px;
  height: 400px;
}
</style>
