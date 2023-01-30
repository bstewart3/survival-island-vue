import { defineStore } from "pinia";

export const useWoodCounterStore = defineStore("woodCounter", {
  state: () => {
    return { count: 126 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
