<template>
  <div v-if="health > 0">
    <button v-if="canGather" @click="gather('wood', 1)">Gather Wood</button>
    <button v-if="canGather" @click="gather('stone', 1)">Gather Stone</button>
    <button v-if="canGather" @click="gather('food', 2)">Gather Food</button>
    <div v-else>You cannot gather resources right now.</div>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { gatherResources, health, userTools } = useGame();
    return { gatherResources, health, userTools };
  },
  computed: {
    canGather() {
      return this.health.playerHealth > 0;
    },
    health() {
      return this.health.playerHealth;
    },
    userTools() {
      return this.userTools;
    },
  },
  methods: {
    gather(resource, amount) {
      this.gatherResources(resource, amount);
    },
  },
};
</script>
