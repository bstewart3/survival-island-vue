import { defineStore } from "pinia";

export const useStoneCounterStore = defineStore("stoneCounter", {
  state: () => {
    return { count: 144 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
