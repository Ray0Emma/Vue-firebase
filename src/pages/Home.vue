<template>
  <div class="container-lg">
    <div class="row justify-content-center mb-5">
      <div class="col-6 text-center">
        <h1>Welcome in our website!</h1>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="card me-5 shadow border-0" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Add User</h5>
          <p class="card-text">Add a new user to the Firebase experimental website.</p>
          <router-link class="btn btn-dark" to="/AddUser">Add a user</router-link>
        </div>
      </div>

      <div class="card shadow border-0" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">All User</h5>
          <p class="card-text">Display all users info from the Firebase experimental website.</p>
          <router-link class="btn btn-dark" to="/AllUsers">Get all users</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1{
  color: #59b984;
}
</style>