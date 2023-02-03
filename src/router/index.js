import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowView from "@/views/ShowView.vue";
import {
  SEARCH_QUERY_PARAM_NAME,
  SHOW_PATH_PARAM_NAME,
} from "@/router/route-partials.config";
import SearchView from "@/views/SearchView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: `/shows/:${SHOW_PATH_PARAM_NAME}`,
    component: ShowView,
    props: true,
  },
  {
    path: "/search",
    component: SearchView,
    props: (route) => ({
      [SEARCH_QUERY_PARAM_NAME]: route.query[SEARCH_QUERY_PARAM_NAME],
    }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
