<template>
  <div>
    <p>Days Survived: {{ timeSurvived }}</p>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { survival } = useGame();
    return { survival };
  },
  computed: {
    timeSurvived() {
      return this.survival.daysSurvived;
    },
  },
  created() {
    // setInterval(() => {
    //   const { timeSurvived, winConditionsMet } = useGame();
    //   if (timeSurvived >= winConditionsMet) {
    //     // end the game
    //   }
    // }, 1000);
  },
};
</script>
