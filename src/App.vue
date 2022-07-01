<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

#app {
  font-family: "Staatliches", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button {
  cursor: pointer;
}
</style>
