<template>
  <div class="header">
        <span id="logo">Joy Food</span>
  </div>

  <div id="app" class="container">
      <div class="content">
          <h1 class="title">Top Ventes</h1>
          <FoodSelector></FoodSelector>
      </div>
  </div>
</template>

<script>
import FoodSelector from './components/FoodSelector.vue'

export default {
  name: 'App',
  components: {
    FoodSelector
  }
}
</script>

<style>
@import "./assets/styles/app.css";
</style>
