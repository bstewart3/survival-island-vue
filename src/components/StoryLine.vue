<template>
  <transition-group name="message">
    <div v-if="story.showMessage" class="message" :key="currentIndex">
      {{ story.currentMessage }}
    </div>
  </transition-group>
</template>

<script>
import { useGame } from "../stores/useGame";
export default {
  data() {
    return {
      showMessage: true,
    };
  },
  computed: {
    storyLines() {
      return this.story.storyLines;
    },
    currentIndex() {
      return this.story.updatedIndex;
    },
  },
  created() {
    const { checkForStory } = useGame();

    setInterval(() => {
      checkForStory();
    }, 100);
  },

  setup() {
    const { story } = useGame();

    return {
      story,
    };
  },
};
</script>
<style>
.message-enter-active,
.message-leave-active {
  transition: all 0.7s ease-out;
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
</style>
