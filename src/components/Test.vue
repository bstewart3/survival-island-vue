<template>
  <div>
    <div v-if="lookingForPlayers">Looking for players...</div>
    <button @click="testFirebase">Start Match making</button>
    <button @click="showOpenGames = !showOpenGames">Show Open Games</button>
    <div v-if="showOpenGames">
      <div>Games To Join:</div>
      <div v-for="(game, index) in openGamesArray" :key="index">
        <p>Game: {{ game.gameId }}</p>
        <button>Join</button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import {
  collection,
  addDoc,
  Timestamp,
  where,
  query,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useLogin } from "../stores/login";

export default {
  data() {
    return {
      lookingForPlayers: false,
      openGamesArray: [],
      showOpenGames: false,
    };
  },
  async mounted() {
    const gamesRef = collection(db, "games");
    const q = query(gamesRef, where("test", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      this.openGamesArray.push({ gameId: doc.id, gameData: doc.data() });
      console.log(this.openGamesArray);
    });
  },
  methods: {
    async testFirebase() {
      try {
        const { user } = useLogin();
        const docRef = await addDoc(collection(db, "games"), {
          completed: false,
          test: true,
          player1: user,
          player2: "",
          participants: [user],
          started: Timestamp.fromDate(new Date()),
        });
        console.log("Document written with ID: ", docRef.id);
        this.lookingForPlayers = true;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  joinGame() {
    console.log("hyphy");
  },
};
</script>

<style></style>
