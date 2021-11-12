<template>
  <div>
      <input type="text" :value="$store.state.search" @input="onChange">
      <span>城市：{{$store.getters.searchText}}</span>
  </div>
</template>    


<script>
export default {
    methods:{
        onChange(e){
            this.$store.commit('setSearch',e.target.value)
            console.log(e.target.value);
            this.$store.dispatch('getWeather', e.target.value)
        }
    }
};
</script>

<style lang="">
</style>