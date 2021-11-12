<script>
import Search from "./components/Search.vue";
import Weather from "./components/Weather.vue";

export default {
  components: {
    Search,
    Weather,
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Search />
  <Weather></Weather>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
