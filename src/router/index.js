import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "@/views/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
