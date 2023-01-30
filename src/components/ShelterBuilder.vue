<template>
  <div>
    <p>Shelter Progress: {{ shelterProgress }}%</p>
    <button @click="buildShelter" v-if="!isShelterBuilt">Build Shelter</button>
    <p v-if="isShelterBuilt">Shelter is built</p>
  </div>
</template>

<script>
import ResourceCounter from "./ResourceCounter.vue";

export default {
  components: {
    ResourceCounter,
  },
  data() {
    return {
      shelterProgress: 0,
      isShelterBuilt: false,
    };
  },
  methods: {
    buildShelter() {
      console.log(ResourceCounter.wood);
      if (
        this.$refs.ResourceCounter.wood >= 2 &&
        this.$refs.ResourceCounter.stone >= 3
      ) {
        this.$refs.ResourceCounter.useWood(2);
        this.$refs.ResourceCounter.useStone(3);
        this.shelterProgress += 25;
        if (this.shelterProgress >= 100) {
          this.isShelterBuilt = true;
        }
      }
    },
  },
};
</script>
