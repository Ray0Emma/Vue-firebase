<template>
  <div id="app">
    <h1>Filters are deprecated</h1>
    <!-- {{text | toUpper}} -->
    <!-- Local  -->
    {{ toUpper }}
    <br>
    <!-- Global filter -->
    {{ $filters.toLower(text) }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        text: 'we gonna apply a filter on this text'  
    }
  },
  computed: {
    toUpper() {
       return this.text.toUpperCase();
    }
  },
  
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
