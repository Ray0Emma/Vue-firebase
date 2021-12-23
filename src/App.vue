<template>
  <div id="app">
    <Filters></Filters>
    <br/>
    <img alt="Vue logo" src="./assets/logo.png">
    <imperial-converter/>
    <br/>
    <BMI/>
  </div>
</template>

<script>
import Filters from './components/Filters.vue'
import ImperialConverter from './components/ImperialConverter.vue'
import BMI from './components/BMI.vue'
export default {
  name: 'App',
  components: {
      Filters,
      ImperialConverter,
      BMI
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
