<template>
  <div>
    <p v-if="dangerOccurred">A {{ dangers }} has occurred!</p>
    <p v-else>No danger at this time!</p>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { danger } = useGame();
    return { danger };
  },
  computed: {
    dangerOccurred() {
      return this.danger.dangerOccurred;
    },
    dangers() {
      return this.danger.dangers;
    },
  },
  created() {
    const { checkForDanger } = useGame();
    setInterval(() => {
      checkForDanger();
    }, 30000);
  },
};
</script>
