<template>
  <div class="toolCreatorButtons">
    <div>Tools:</div>
    <div v-for="(tool, index) in tools" :key="index">
      <button @click="createTool(tool.name)" :disabled="!canCreate(tool.cost)">
        {{ tool.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { resources, createTool, canCreate, tools } = useGame();
    return { resources, createTool, canCreate, tools };
  },
  computed: {
    tools() {
      return this.tools;
    },
  },
};
</script>
<style scoped>
.toolCreatorButtons {
  margin-top: 1rem;
}
</style>
