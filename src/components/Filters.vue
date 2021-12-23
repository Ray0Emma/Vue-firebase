<template>
    <h1>Filters are deprecated</h1>
    <!-- {{text | toUpper}} -->
    <!-- Local  -->
    {{ toUpper }}
    <br>
    <!-- Global filter -->
    {{ $filters.toLower(text) }}
</template>

<script>
export default {
  name: 'Filters',
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

<style scoped>

</style>