<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ResourceCounter />
    <GatherResources />
    <BuildShelter />
    <HealthTracker />
    <HealPlayer />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ResourceCounter from "./components/ResourceCounter.vue";
import GatherResources from "./components/GatherResources.vue";
import BuildShelter from "./components/BuildShelter.vue";
import HealthTracker from "./components/HealthTracker.vue";
import HealPlayer from "./components/HealPlayer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ResourceCounter,
    GatherResources,
    BuildShelter,
    HealthTracker,
    HealPlayer,
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
</style>

