<template>
  <div class="inventory">
    <ResourceCounter />

    <div class="survivorHandler">
      <SurvivorHandler />
    </div>
    <div class="toolTracker">
      <ToolTracker />
    </div>
    <div class="healthTracker">
      <HealthTracker />
    </div>
    <div class="healPlayer">
      <HealPlayer />
    </div>
  </div>
</template>

<script>
import ResourceCounter from "../components/ResourceCounter.vue";
import HealthTracker from "../components/HealthTracker.vue";
import HealPlayer from "../components/HealPlayer.vue";
import ToolTracker from "../components/ToolTracker.vue";
import SurvivorHandler from "../components/SurvivorHandler.vue";
export default {
  components: {
    ResourceCounter,
    HealthTracker,
    HealPlayer,
    ToolTracker,
    SurvivorHandler,
  },
};
</script>

<style>
.inventory {
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 10rem;
}
</style>
