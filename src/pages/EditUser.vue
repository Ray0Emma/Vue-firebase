<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-2">
        <h1>Edit User</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-2">
        <div class="container">
          <div class="row">
            <div class="col-12">
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
        </div>
        <button class="btn btn-primary float-left" style="margin-left:12px;" @click="putUser()">Save</button>
        <button
          class="btn btn-danger float-right"
          style="margin-right:12px;"
          @click="deleteUser()"
        >Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
        .then(
          () => {
            this.$swal(
              "The user is updated.",
              "Operation Succeeded",
              "success"
            );
        })
        .then(
                () => {
                this.$router.push('AllUsers');
            })
        .catch(() => {
            this.$swal("Oops...", "Something went wrong!", "error");
        });
    },
    deleteUser() {
      this.$swal({
        title: 'Are you sure you want to delete this user?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.$swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
        })
        .then(() => {
            return axios
            .delete(
                "https://vue-login-db-default-rtdb.firebaseio.com/users/" +
                this.$route.params.user +
                ".json"
            )
            .then(
                () => {
                this.$router.push({name:'AllUsers'});
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
       }
      return user;
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 8px;
}
</style>