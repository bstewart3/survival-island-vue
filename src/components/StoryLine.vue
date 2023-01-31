<template>
  <div>
    <p v-for="(storyLine, index) in currentStoryLine" :key="index">
      {{ storyLine }}
    </p>
    <p>{{ gameIndex }}</p>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { story, storyLines, advanceStory } = useGame();
    const currentStoryLine = [story.storyLines[story.currentStoryIndex]];
    console.log(story.currentStoryIndex);
    // setInterval(() => {
    //   advanceStory();
    // }, 1000);

    return { story, currentStoryLine, storyLines, advanceStory };
  },
  computed: {
    gameIndex() {
      //   console.log(this.story.currentStoryIndex);
      return this.story.currentStoryIndex;
    },
  },
};
</script>
