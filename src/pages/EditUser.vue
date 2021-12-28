<template>
  <div class="container-lg">
    <div class="row justify-content-center mt-5">
      <div class="col-6 text-center mt-4">
        <h1>Edit User</h1>
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
          <button class="btn btn-dark mt-3" @click="putUser()">Save</button>
          <button class="btn btn-danger mt-3 float-end" @click="deleteUser()">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditUser",
  methods: {
    putUser() {
      return axios
        .put(
          "https://vue-login-db-default-rtdb.firebaseio.com/users/" +
            this.$route.params.user +
            ".json",
          this.user
        )
        .then(() => {
          this.$swal("The user is updated.", "Operation Succeeded", "success");
        })
        .then(() => {
          this.$router.push("AllUsers");
        })
        .catch(() => {
          this.$swal("Oops...", "Something went wrong!", "error");
        });
    },
    deleteUser() {
      this.$swal({
        title: "Are you sure you want to delete this user?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal("Deleted!", "Your file has been deleted.", "success");
          }
        })
        .then(() => {
          return axios
            .delete(
              "https://vue-login-db-default-rtdb.firebaseio.com/users/" +
                this.$route.params.user +
                ".json"
            )
            .then(() => {
              this.$router.push({ name: "AllUsers" });
            })
            .catch(() => {
              this.$swal("Oops...", "Something went wrong!", "error");
            });
        });
    },
  },
  computed: {
    user() {
      let user = {
        username: this.$route.params.username,
        firstname: this.$route.params.firstname,
        lastname: this.$route.params.lastname,
      };
      return user;
    },
  },
};
</script>

<style scoped>
h1 {
  color: #59b984;
}
</style>
