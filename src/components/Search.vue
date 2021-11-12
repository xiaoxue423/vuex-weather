<template>
  <div>
    <input type="text" :value="search" @input="onChange" />
    <span>城市：{{ searchText }}</span>
  </div>
</template>    


<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  // methods:{
  //     onChange(e){
  //         this.$store.commit('setSearch',e.target.value)
  //         console.log(e.target.value);
  //         this.$store.dispatch('getWeather', e.target.value)
  //     }
  // }
  setup() {
    let store = useStore();
    const onChange = (e) => {
      store.commit("setSearch", e.target.value);
      console.log(e.target.value);
      store.dispatch("getWeather", e.target.value);
    };
    return {
      search: computed(() => store.state.search),
      searchText: computed(() => store.getters.searchText),
      onChange,
    };
  },
};
</script>

<style lang="">
</style>