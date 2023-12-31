import Vue from "vue";
import VueRouter from "vue-router";
import GlobalFeed from "../views/GlobalFeed.vue";
import Register from "@/views/Register";
import Login from "@/views/Login";
Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "globalFeed",
    component: GlobalFeed,
  },
  {
    path: "/",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
