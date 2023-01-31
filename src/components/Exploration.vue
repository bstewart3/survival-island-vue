<template>
  <div>
    <button @click="explore">Explore The Island</button>
    <p v-if="newResourceFound">You found a new resource!</p>
    <p v-if="otherSurvivorFound">You found another survivor!</p>
    <p v-if="dangerFound">You we're injured while exploring</p>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { exploration } = useGame();
    return { exploration };
  },
  computed: {
    newResourceFound() {
      return this.exploration.newResourceFound;
    },
    otherSurvivorFound() {
      return this.exploration.otherSurvivorFound;
    },
    dangerFound() {
      return this.exploration.dangerFound;
    },
  },
  methods: {
    explore() {
      const { discoverNewResource, discoverOtherSurvivor, discoverDanger } =
        useGame();
      const discovery = Math.random();
      if (discovery < 0.5) {
        discoverNewResource();
      } else if (discovery < 0.8) {
        discoverOtherSurvivor();
      } else {
        discoverDanger();
      }
    },
  },
};
</script>
