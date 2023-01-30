import { defineStore } from "pinia";

export const useGame = defineStore({
  id: "game",
  state: () => ({
    resources: {
      wood: 6,
      stone: 3,
      food: 2,
    },
    shelter: {
      shelterBuilt: false,
      shelterProgress: 0,
    },
    health: {
      playerHealth: 100,
    },
    tools: {},
    playerHealth: 100,
    gameOver: false,
    gameWon: false,
    daysSurvived: 0,
    dangers: [],
    discoveries: [],
  }),
  actions: {
    gatherResources(resource, amount) {
      this.resources[resource] += amount;
      this.tick();
    },
    useResources(resource, amount) {
      this.resources[resource] -= amount;
    },

    addShelterProgress(amount) {
      this.shelter.shelterProgress += amount;
      //   console.log(this.shelter.shelterProgress);
    },

    buildShelter() {
      if (this.resources.wood >= 10 && this.resources.stone >= 5) {
        this.useResources("wood", 10);
        this.useResources("stone", 5);
        this.addShelterProgress(25);
        this.tick();
      }
    },

    createTool(tool) {
      if (this.resources.wood >= 5) {
        this.useResources("wood", 5);
        this.tools[tool] = true;
      }
    },
    damageHealth(amount) {
      this.health.playerHealth -= amount;
      if (this.health.playerHealth <= 0) {
        this.gameOver = true;
      }
    },
    healHealth(amount) {
      if (this.health.playerHealth >= 100) {
        return;
      }
      this.health.playerHealth += amount;
    },
    addDanger(danger) {
      this.dangers.push(danger);
    },
    removeDanger(danger) {
      this.dangers = this.dangers.filter((d) => d !== danger);
    },
    addDiscovery(discovery) {
      this.discoveries.push(discovery);
    },

    tick() {
      const randomNumber = Math.floor(Math.random() * 16);
      this.daysSurvived++;
      if (this.resources.food >= 5) {
        this.resources.food -= 2;
      } else {
        this.damageHealth(randomNumber);
        console.log(this.health.playerHealth);
      }

      console.log(this.daysSurvived);
    },
  },
});
