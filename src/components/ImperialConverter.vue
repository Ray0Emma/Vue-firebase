<template>
  <div>
    <h2>Imperial Converter</h2>
    <br />
    <div>
      <input type="text" style="width:70px;text-align:center;" v-model="kg_value" />
      <span style="margin-left:8px;">Kg = {{to_pounds}} pounds.</span>
    </div>
    <br />
    <div>
      <input type="text" style="width:70px;text-align:center;" v-model="cm_value" />
      <span style="margin-left:8px;">CM = {{to_inches}} Inches.</span>
    </div>
  </div>
</template>

<script>
import { ConverterMixin } from "../ConverterMixin";

export default {
  name: "ImperialConverter",
  mixins: [ConverterMixin],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
