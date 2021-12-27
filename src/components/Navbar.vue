<template>
    <!-- Start Navbar -->
    <nav class="navbar navbar-expand-md navbar-light navbar-top py-3 shadow-sm">
      <div class="container-lg ">
        <router-link class="navbar-brand fs-5 fw-bold " to="/"> 
          <img src="../assets/logo.png" alt="Purple Letter F inside polygon" width="43" height="43"
            class="brand-text">
          <span class="fs-6">Welcome There!</span>
        </router-link>
        <button class="d-lg-none d-md-none bg-white " style="border-color: rgba(102, 172, 204, 0);"
          data-bs-toggle="collapse" data-bs-target="#toggelMobileMenu" aria-controls="toggelMobileMenu"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="toggelMobileMenu" >
          <hr>
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item me-3">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item me-3">
              <router-link to="/AddUser">Add User</router-link>
            </li>
            <li class="nav-item me-3">
              <router-link to="/AllUsers">All User</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
nav.navbar {
  margin-bottom: 34px;
}
nav.navbar a span {
  font-weight: bold;
  color: #2c3e50;
}
li.nav-item a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right:12px;
}
li.nav-item a.router-link-active {
  color: #59b984;
}
</style>