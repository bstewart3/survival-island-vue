<template>
  <div>
    <div v-if="health <= 0">You Have Died</div>
    <div v-if="health > 0">Health: {{ health }}</div>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { health, gameOver } = useGame();
    return { health, gameOver };
  },
  computed: {
    health() {
      return this.health.playerHealth;
    },
  },
};
</script>
