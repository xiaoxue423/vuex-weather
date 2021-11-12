<template>
  <div class="weather">
    <h2>
      <span class="detail">{{ searchText }}</span>
      天⽓详情
    </h2>
    <p>天⽓ {{ weather.text }}</p>
    <p>体感温度 {{ weather.feels_like }}</p>
    <p>⻛⼒ {{ weather.wind_class }}</p>
    <button @click="setDefault">杭州天⽓</button>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  //   computed: {
  //     ...mapState(["search", "weather"]),
  //     ...mapGetters(["searchText"]),
  //   },
  //   methods: {
  //     ...mapMutations(["setSearch", "setWeather"]),
  //     ...mapActions(["getWeather"]),
  //     setDefault() {
  //       this.setSearch("杭州");
  //       this.getWeather("杭州");
  //     },
  //   },
  setup() {
    const store = useStore();

    const setDefault = () => {
      store.commit('setSearch',"杭州");
      store.dispatch('getWeather',"杭州");
    };

    return {
      weather: computed(() => store.state.weather),
      searchText: computed(() => store.getters.searchText),
      setDefault,
    };
  },
};
</script>

<style>
.detail {
  color: red;
}
</style>