<template>
  <div>
    <h2>Body Mass Index (BMI)</h2>
    <div>
      <div>
        <span>Weight (Kg):</span>
        <input type="text" style="width:50px;text-align:center;" v-model="kg_value" />
      </div>
      <br />
      <div>
        <span>Height (Cm):</span>
        <input type="text" style="width:50px;text-align:center;" v-model="cm_value" />
      </div>
      <br />
      <div>
        <span>BMI value: {{bmi_value}}</span> -
        <span>{{result}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ConverterMixin } from "../ConverterMixin";
export default {
  name: "BMI",
  mixins: [ConverterMixin],
  computed: {
    bmi_value: function () {
      return (703 * this.to_pounds) / (this.to_inches * this.to_inches);
    },
    result: function () {
      if (this.bmi_value < 16) {
        return "Underweight | Severe Thinness";
      } else if (this.bmi_value < 17) {
        return "Underweight | Moderate Thinness";
      } else if (this.bmi_value < 18.5) {
        return "Underweight | Mild Thinness";
      } else if (this.bmi_value < 24.9) {
        return "Healthy";
      } else if (this.bmi_value < 30) {
        return "Overweight";
      } else if (this.bmi_value < 35) {
        return "Obese Class I";
      } else if (this.bmi_value < 40) {
        return "Obese Class II";
      } else if (this.bmi_value >= 40) {
        return "Obese Class III";
      } else {
        return "Not defined!";
      }
    },
  },
};
</script>