<template>
  <div>
    <transition-group name="danger" tag="div">
      <p v-if="dangerOccurred">A {{ dangers }} has occurred!</p>
      <p v-else>No danger at this time!</p>
    </transition-group>
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
    let randomNumber = Math.floor(Math.random() * (95000 - 30000 + 1)) + 30000;
    setInterval(() => {
      checkForDanger();
    }, randomNumber);
  },
};
</script>
<style scoped>
.danger-enter-active,
.danger-leave-active {
  transition: all 0.5s ease-out;
}
.danger-enter-from,
.danger-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
