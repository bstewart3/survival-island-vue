<template>
  <div>
    <TimeTracker />
    <DangerHandler />
    <ResourceCounter />
    <div class="toolTracker">
      <ToolTracker />
    </div>
    <div class="healthTracker">
      <HealthTracker />
    </div>
    <div class="healPlayer">
      <HealPlayer />
    </div>
    <IntroMessage />
    <div class="storyLines">
      <StoryLines />
    </div>

    <PlayerControls />
    <!-- <GatherResources /> -->
    <!-- <BuildShelter /> -->

    <!-- <ToolCreator /> -->

    <!-- <Exploration /> -->
  </div>
</template>

<script>
import ResourceCounter from "./components/ResourceCounter.vue";
// import GatherResources from "./components/GatherResources.vue";
// import BuildShelter from "./components/BuildShelter.vue";
import HealthTracker from "./components/HealthTracker.vue";
import HealPlayer from "./components/HealPlayer.vue";
import TimeTracker from "./components/TimeTracker.vue";
// import ToolCreator from "./components/ToolCreator.vue";
import DangerHandler from "./components/DangerHandler.vue";
// import Exploration from "./components/Exploration.vue";
import StoryLines from "./components/StoryLine.vue";
import IntroMessage from "./components/introMessage.vue";
import PlayerControls from "./components/PlayerControls.vue";
import ToolTracker from "./components/ToolTracker.vue";

export default {
  name: "App",
  components: {
    ResourceCounter,
    // GatherResources,
    // BuildShelter,
    HealthTracker,
    HealPlayer,
    TimeTracker,
    // ToolCreator,
    DangerHandler,
    // Exploration,
    StoryLines,
    IntroMessage,
    PlayerControls,
    ToolTracker,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.healthTracker {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
}
.healPlayer {
  display: flex;
  align-items: flex-start;
  padding-left: 1.5rem;
}
.storyLines {
  padding-bottom: 50px;
}
.toolTracker {
  padding: 1.5rem;
}
</style>

