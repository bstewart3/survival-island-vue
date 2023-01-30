<template>
  <div v-if="health > 0">
    <button v-if="canGather" @click="gather('wood', 4)">Gather Wood</button>
    <button v-if="canGather" @click="gather('stone', 4)">Gather Stone</button>
    <button v-if="canGather" @click="gather('food', 4)">Gather Food</button>
    <div v-else>You cannot gather resources right now.</div>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { gatherResources, health } = useGame();
    return { gatherResources, health };
  },
  computed: {
    canGather() {
      return this.health.playerHealth > 0;
    },
    health() {
      return this.health.playerHealth;
    },
  },
  methods: {
    gather(resource, amount) {
      this.gatherResources(resource, amount);
    },
  },
};
</script>
