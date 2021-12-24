<template>
   <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Vue.js Remote Server</h2>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>First name</label>
          <input type="text" class="form-control" v-model="user.firstname" />
        </div>
        <div class="form-group">
          <label>Last name</label>
          <input type="text" class="form-control" v-model="user.lastname" />
        </div>
        <button class="btn btn-primary" @click="postData()">Add</button>
        <br />
        <br />
        <button class="btn btn-primary" @click="getData()">Retrieve</button>
        <br />
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="usr in users"
            v-bind:key="usr.username"
          >{{usr.username}} - {{usr.firstname}} {{usr.lastname}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      user: {
        username: '',
        firstname: '',
        lastname: ''
      },
      users: []
    }
  },
  methods: {
    postData() {
      return axios
      .post('https://vue-login-db-default-rtdb.firebaseio.com/users.json',this.user)
      .then((response) => {
            console.log(response.data);

            this.user.username = "";
            this.user.firstname = "";
            this.user.lastname = "";
          })
      .catch((errors) => {
        console.log(errors)
      });
    },
    getData() {
      return axios
      .get('https://vue-login-db-default-rtdb.firebaseio.com/users.json')
      .then((res) => {
          console.log(res.data);

          let myData = res.data;
          const tmpArray = [];

          for (let key in myData) {
            tmpArray.push(myData[key]);
          }

          this.users = tmpArray;
        });
    }
  },
  
  
}
</script>

<style>

</style>
