<template>
  <div id="app">
    <Filters></Filters>
    <br>
    <img alt="Vue logo" src="./assets/logo.png">
    <imperial-converter/>

  </div>
</template>

<script>
import Filters from './components/Filters.vue'
import ImperialConverter from './components/ImperialConverter.vue'
export default {
  name: 'App',
  components: {
      Filters,
      ImperialConverter
  }
  
}
</script>

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
