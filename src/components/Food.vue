<template>
  <div class="drink" v-on:click="select" v-bind:class="{'active-drink': is_selected}">
      <div class="description">
          <span class="title">
              {{name}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Food',
  props: {
    name: {
        type: String
    },
    selectedFood:{
        type: String
    }
  },
  computed:{
        is_selected(){
            return this.selectedFood === this.name;
        }
  },
  methods: {
        select() {
            this.$emit('food_selected_event', this.name)
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drinks {
    padding: 0 40px;
    margin-bottom: 40px
}

.drinks .drink {
    background-color: #fff;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.drinks .drink, .drinks .drink>.weight {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.drinks .drink>.description {
    width: 100%;
    padding: 1rem;
}

.drinks .drink>.description .title {
    color: #3d4852;
    display: block;
    font-weight: 700;
    margin-bottom: .25rem;
    float: left;
}

.drinks .drink>.description .description {
    font-size: .875rem;
    font-weight: 500;
    color: #8795a1;
    line-height: 1.5
}

.drinks .drink>.price {
    width: 20%;
    color: #09848d;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 1.5rem;
    font-family: Crimson Text, serif;
    font-weight: 600
}

.drinks .drink>.price .dollar-sign {
    font-size: 24px;
    font-weight: 700
}

.drinks .drink>.price .number {
    font-size: 72px;
    line-height: .5
}

.drinks .active-drink, .drinks .drink:hover {
    -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)
}

.drinks .active-drink:after, .drinks .drink:hover:after {
    border-width: 2px;
    border-color: #7dacaf;
    border-radius: .25rem;
    content: "";
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.drinks .active-drink, .drinks .drink:hover {
    background-color: lightgray;
    -webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)
}

.drinks .active-drink:after, .drinks .drink:hover:after {
    border-width: 2px;
    border-color: #7dacaf;
    border-radius: .25rem;
    content: "";
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}
</style>
