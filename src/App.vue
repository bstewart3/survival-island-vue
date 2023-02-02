<template>
  <div>
    <div v-if="!gameOver && !gameWon">
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
    </div>
    <transition-group name="game">
      <div v-if="gameOver">
        <h2>You Have Died!</h2>
        <br />
        <button @click="reloadPage">Restart</button>
      </div>
      <div v-if="gameWon">
        <h2>You Have Won!</h2>
        <button @click="reloadPage">Restart</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import ResourceCounter from "./components/ResourceCounter.vue";
import HealthTracker from "./components/HealthTracker.vue";
import HealPlayer from "./components/HealPlayer.vue";
import TimeTracker from "./components/TimeTracker.vue";
import DangerHandler from "./components/DangerHandler.vue";
import StoryLines from "./components/StoryLine.vue";
import IntroMessage from "./components/introMessage.vue";
import PlayerControls from "./components/PlayerControls.vue";
import ToolTracker from "./components/ToolTracker.vue";
import { useGame } from "./stores/useGame";

export default {
  name: "App",
  components: {
    ResourceCounter,
    HealthTracker,
    HealPlayer,
    TimeTracker,
    DangerHandler,
    StoryLines,
    IntroMessage,
    PlayerControls,
    ToolTracker,
  },
  setup() {
    const { survival } = useGame();
    return { survival };
  },
  computed: {
    gameOver() {
      return this.survival.gameOver;
    },
    gameWon() {
      return this.survival.gameWon;
    },
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
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

