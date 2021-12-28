<template>
  <div class="container-lg">
    <div class="row justify-content-center mt-5">
      <div class="col-6 text-center mt-4">
        <h1>Add User</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.username"
                />
              </div>
              <div class="form-group mt-3">
                <label>First name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.firstname"
                />
              </div>
              <div class="form-group mt-3">
                <label>Last name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.lastname"
                />
              </div>
            </div>
          </div>
          <button class="btn btn-dark px-4 mt-3" @click="postUser()">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  methods: {
    postUser() {
      return axios
        .post(
          "https://vue-login-db-default-rtdb.firebaseio.com/users.json",
          this.user
        )
        .then(() => {
          this.user.username = "";
          this.user.firstname = "";
          this.user.lastname = "";

          this.$swal("A new user is added.", "Operation Succeeded", "success");
        })
        .catch(() => {
          this.$swal("Oops...", "Something went wrong!", "error");
        });
    },
  },
  data() {
    return {
      user: {
        username: "",
        firstname: "",
        lastname: "",
      },
    };
  },
};
</script>

<style scoped>
h1 {
  color: #59b984;
}
</style>
