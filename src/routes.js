import { createRouter } from 'vue-router'
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AllUsers from "./pages/AllUsers";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/AddUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: "/EditUser",
      name: "EditUser",
      component: EditUser
    },
    {
      path: "/AllUsers",
      name: "AllUsers",
      component: AllUsers
    },
  ]

  const router = createRouter({
    routes
  })
  export default router