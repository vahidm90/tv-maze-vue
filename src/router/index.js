import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowView from "@/views/ShowView.vue";
import { SHOW_PATH_PARAM_NAME } from "@/router/route-partials.config";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: `/shows/:${SHOW_PATH_PARAM_NAME}`,
    component: ShowView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
