<template>
 <div class="drinks">
    <Food 
            v-for="foo in food" 
            :name="foo"
            :key="foo.name"
            v-on:food_selected_event="food_selected_handler" 
            v-bind:selectedFood="current_food">
    </Food>
 </div>
</template>

<script>
import Food from "./Food.vue"
export default {
    name: 'FoodSelector',
    components: {
        Food
    },
    data() {
        return {
        food: ["Sushi Express", "Crevettes Panées", "Brochettes Boeuf Fromage", "Pizza Japonaise", "Jus Avocat Oreo"],
        current_food: null
        }
    },
    methods:{
        food_selected_handler(food_name){
            this.current_food = food_name;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>