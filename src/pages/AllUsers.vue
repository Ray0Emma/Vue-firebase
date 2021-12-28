<template>
  <div class="container-lg">
    <div class="row justify-content-center mt-5">
      <div class="col-6 text-center mt-4" v-show="getData()">
        <h1>All Users</h1>
        <!-- <p class="text-muted mt-4 fs-5">Click to retrieve all users!</p>
        <button class="btn btn-dark px-5" @click="getData()">Retrieve</button> -->
      </div>

      <div class="col-10 mt-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Fullname</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-for="usr in users" v-bind:key="usr.username">
            <tr>
              <td>{{ usr.username }}</td>
              <td>{{ usr.firstname }} {{ usr.lastname }}</td>
              <td>
                <router-link
                  class="btn btn-dark"
                  :to="{
                    name: 'EditUser',
                    params: {
                      user: usr.id,
                      username: usr.username,
                      firstname: usr.firstname,
                      lastname: usr.lastname,
                    },
                  }"
                  >Edit</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- <div class="row" v-for="usr in users" v-bind:key="usr.username">
      <div class="col-2">{{ usr.username }}</div>
      <div class="col-4">{{ usr.firstname }} {{ usr.lastname }}</div>
      <div class="col-1">
        <router-link
          :to="{
            name: 'EditUser',
            params: {
              user: usr.id,
              username: usr.username,
              firstname: usr.firstname,
              lastname: usr.lastname,
            },
          }"
          >Edit</router-link
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        username: "",
        firstname: "",
        lastname: "",
      },
      users: [],
    };
  },
  methods: {
    getData() {
      return axios
        .get("https://vue-login-db-default-rtdb.firebaseio.com/users.json")
        .then((res) => {
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
  },
};
</script>

<style scoped>
h1 {
  color: #59b984;
}
</style>
