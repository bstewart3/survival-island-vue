<template>
  <div>
    <div>What would you like to do?</div>
    <div class="buttons">
      <button
        v-if="!isGathering || !isBuilding || !isExploring"
        @click="isCurrentlyGathering"
      >
        Gather
      </button>
      <button
        v-if="!isGathering || !isBuilding || !isExploring"
        @click="isCurrentlyExploring"
      >
        Explore
      </button>
      <button
        v-if="!isGathering || !isBuilding || !isExploring"
        @click="isCurrentlyBuilding"
      >
        Build
      </button>
      <!-- <HealPlayer /> -->
    </div>
    <div v-if="isBuilding">
      <BuildShelter />
      <ToolCreator />
    </div>
    <div v-if="isGathering">
      <GatherResources />
    </div>
    <div v-if="isExploring">
      <Exploration />
    </div>
  </div>
</template>

<script>
import ToolCreator from "./ToolCreator.vue";
import BuildShelter from "./BuildShelter.vue";
import GatherResources from "./GatherResources.vue";
import Exploration from "./Exploration.vue";
import HealPlayer from "./HealPlayer.vue";
export default {
  components: {
    ToolCreator,
    BuildShelter,
    GatherResources,
    Exploration,
    HealPlayer,
  },
  data() {
    return {
      isBuilding: false,
      isGathering: false,
      isExploring: false,
    };
  },
  actions: {},

  methods: {
    isCurrentlyGathering() {
      this.isGathering = true;
      this.isBuilding = false;
      this.isExploring = false;
    },
    isCurrentlyBuilding() {
      this.isGathering = false;
      this.isBuilding = true;
      this.isExploring = false;
    },
    isCurrentlyExploring() {
      this.isGathering = false;
      this.isBuilding = false;
      this.isExploring = true;
    },
  },
};
</script>

<style scoped>
.buttons {
  display: inline;
}
</style>
>
