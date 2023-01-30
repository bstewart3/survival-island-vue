<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Resource</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(quantity, resource) in resources" :key="resource">
          <td>{{ resource }}</td>
          <td>{{ quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { useWoodCounterStore } from "@/stores/resources/woodCounter";
// import { useStoneCounterStore } from "@/stores/resources/stoneCounter";
// import { useFoodCounterStore } from "@/stores/resources/foodCounter";
import { useGame } from "../stores/useGame";

export default {
  setup() {
    const { resources } = useGame();
    return { resources };
  },
  computed: {
    wood() {
      return this.resources.wood;
    },
    stone() {
      return this.resources.stone;
    },
    food() {
      return this.resources.food;
    },
  },
};
// setup() {
//   const wood = useWoodCounterStore();

//   // // with autocompletion ✨
//   // wood.$patch({ count: wood.count +  });
//   // // or using an action instead
//   wood.increment();
//   console.log(wood.count);
// },
// data() {
//   return {
//     wood: useWoodCounterStore().count,
//     stone: useStoneCounterStore().count,
//     food: useFoodCounterStore().count,
//   };
// },
// methods: {
//   updateResources(newResources) {
//     this.wood += newResources.wood;
//     this.stone += newResources.stone;
//     this.food += newResources.food;
//   },
//   gatherWood() {
//     const wood = useWoodCounterStore();
//     wood.increment();
//     console.log(wood.count);
//   },
// },
</script>
