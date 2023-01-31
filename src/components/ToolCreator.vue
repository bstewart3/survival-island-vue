<template>
  <div>
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
    const { resources, createTool, canCreate } = useGame();
    return { resources, createTool, canCreate };
  },
  data() {
    return {
      tools: [
        { name: "Axe", cost: { wood: 8, stone: 6 } },
        { name: "Fishing Rod", cost: { wood: 10, stone: 5 } },
        { name: "Spear", cost: { wood: 5, stone: 8 } },
      ],
    };
  },
};
</script>
