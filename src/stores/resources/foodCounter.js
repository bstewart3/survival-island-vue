import { defineStore } from "pinia";

export const useFoodCounterStore = defineStore("foodCounter", {
  state: () => {
    return { count: 333 };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
