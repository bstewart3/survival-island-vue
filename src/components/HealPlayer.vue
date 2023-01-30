<template>
  <div>
    <button v-if="health > 0" @click="eatFood">Eat Food</button>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { healHealth, playerHealth, health, resources } = useGame();
    return { healHealth, playerHealth, health, resources };
  },
  methods: {
    eatFood() {
      const randomNumber = Math.floor(Math.random() * 10);
      if (this.resources.food > 0) {
        this.healHealth(randomNumber);
        this.resources.food--;
      } else {
        console.log("You have no food");
      }
    },
  },
  computed: {
    health() {
      return this.health.playerHealth;
    },
  },
};
</script>
