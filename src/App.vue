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
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click="postOrPutData()">{{actionButtonTitle}}</button>
        <button class="ms-5 btn btn-primary" @click="reset()">Reset</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-2">
        <button class="btn btn-primary btn-dark" @click="getData()">Retrieve</button>
      </div>
    </div>
    <div class="row" v-for="usr in users" v-bind:key="usr.username">
      <div class="col-2">{{usr.username}}</div>
      <div class="col-4">{{usr.firstname}} {{usr.lastname}}</div>
      <div class="col-1">
        <button class="btn btn-link" @click="prepareToSave(usr.id)">Edit</button>
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
      users: [],
      currentUserIdToSave: "",
      actionButtonTitle: "Add",
    }
  },
  methods: {
    postOrPutData() {

      if (this.actionButtonTitle === 'Add') {
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
      } else {
          return axios
          .put('https://vue-login-db-default-rtdb.firebaseio.com/users/'+
                this.currentUserIdToSave + ".json",
                this.user )
          .then((response) => {
                console.log(response);
              })
          .catch((errors) => {
            console.log(errors)
          });     
      }
    },
    getData() {
      return axios
      .get('https://vue-login-db-default-rtdb.firebaseio.com/users.json')
      .then((res) => {
          console.log(res.data);

          let myData = res.data;
          const tmpArray = [];

          for (let key in myData) {
            let withId = myData[key];
            withId.id = key;
            tmpArray.push(myData[key]);
          }

          this.users = tmpArray;
        });
    },
    prepareToSave(id) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.user.username = this.users[i].username;
          this.user.firstname = this.users[i].firstname;
          this.user.lastname = this.users[i].lastname;
          this.currentUserIdToSave = this.users[i].id;

          this.actionButtonTitle = "Save";

          break;
        }
      }
    },
    reset() {
      this.actionButtonTitle = "Add";
      this.currentUserIdToSave = "";

      this.user.username = "";
      this.user.firstname = "";
      this.user.lastname = "";
    }
  },
  
  
}
</script>

<style>

</style>
