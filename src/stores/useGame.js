import { defineStore } from "pinia";

export const useGame = defineStore({
  id: "game",
  state: () => ({
    resources: {
      wood: 6,
      stone: 2,
      food: 4,
    },
    shelter: {
      shelterBuilt: false,
      shelterProgress: 0,
      shelters: 0,
    },
    health: {
      playerHealth: 100,
    },
    survival: {
      daysSurvived: 0,
      winConditionsMet: 30,
    },
    tools: [
      { name: "Axe", cost: { wood: 5, stone: 5 } },
      { name: "Fishing Rod", cost: { wood: 6, stone: 1 } },
      { name: "Spear", cost: { wood: 3, stone: 3 } },
    ],
    danger: {
      dangers: [],
      dangerOccurred: false,
      survivors: 0,
    },
    exploration: {
      newResourceFound: false,
      otherSurvivorFound: false,
      dangerFound: false,
    },
    story: {
      storyLines: [],
      currentStoryIndex: 0,
      currentMessage: [],
      updatedIndex: 0,
      showMessage: true,
    },

    userTools: [],
    gameOver: false,
    gameWon: false,
    discoveries: [],
  }),

  actions: {
    //Action to gather resources
    gatherResources(resource, amount) {
      const hasAxe = this.userTools.filter((tool) => tool === "Axe");
      const hasFishingRod = this.userTools.filter(
        (tool) => tool === "Fishing Rod"
      );

      if (hasAxe.length >= 1) {
        const doubleAmount = amount * 2;
        this.resources[resource] += doubleAmount;
        this.tick();
      }

      if (hasFishingRod.length >= 1) {
        const doubleAmount = amount + 1;
        this.resources[resource] += doubleAmount;
        this.tick();
      }

      this.resources[resource] += amount;
      this.story.storyLines.pop();
      this.story.updatedIndex++;
      this.story.showMessage = true;
      this.story.storyLines.push("You gathered some" + " " + resource);

      console.log(this.story.storyLines);
      this.tick();
    },
    useResources(resource, amount) {
      this.resources[resource] -= amount;
    },
    discoverNewResource() {
      this.exploration.newResourceFound = true;
      this.tick();
      this.story.showMessage = true;
      this.story.storyLines.pop();
      this.story.storyLines.push("You found a new resource");
      console.log("resource found ==>", this.exploration.newResourceFound);
    },
    discoverOtherSurvivor() {
      this.exploration.otherSurvivorFound = true;
      this.survivors++;
      this.tick();
      this.story.showMessage = true;
      this.story.storyLines.pop();
      this.story.storyLines.push("You found a survivor");
      console.log("Survivor Found ==>", this.exploration.otherSurvivorFound);
    },
    discoverDanger() {
      this.exploration.dangerFound = true;
      this.damageHealth(15);
      this.tick();
      this.story.showMessage = true;
      this.story.storyLines.pop();
      this.story.storyLines.push("You we're injured while exploring");
      console.log("Danger Found ==>", this.exploration.dangerFound);
    },
    advanceStory() {
      this.story.currentStoryIndex++;
      console.log(this.story.currentStoryIndex);
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

    canCreate(cost) {
      return Object.entries(cost).every(
        ([resource, value]) => this.resources[resource] >= value
      );
    },
    createTool(name) {
      const tool = this.tools.find((t) => t.name === name);
      if (!tool) return;
      const cost = tool.cost;
      Object.entries(cost).forEach(([resource, value]) => {
        this.resources[resource] -= value;
      });
      this.userTools.push(tool.name);
      console.log(this.userTools);
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
    checkForDanger() {
      const randomNum = Math.random();
      if (randomNum < 0.3) {
        this.danger.dangerOccurred = true;
        this.danger.dangers = "storm";
      } else if (randomNum < 0.6) {
        this.danger.dangerOccurred = true;
        this.danger.dangers = "wild animal";
      } else {
        this.danger.dangerOccurred = false;
      }
      console.log(this.danger.dangers);
    },
    checkForStory() {
      const messages = this.story.storyLines;

      this.story.currentStoryIndex++;

      if (this.story.currentStoryIndex >= messages.length) {
        this.story.currentStoryIndex = 0;
      }
      this.story.currentMessage = messages[this.story.currentStoryIndex];
    },

    addDiscovery(discovery) {
      this.discoveries.push(discovery);
    },

    tick() {
      const randomNumber = Math.floor(Math.random() * 16);
      this.survival.daysSurvived++;
      if (this.resources.food > 0) {
        this.resources.food--;
      } else {
        this.damageHealth(randomNumber);
        console.log(this.health.playerHealth);
      }

      console.log(this.survival.daysSurvived);
    },
  },
});
