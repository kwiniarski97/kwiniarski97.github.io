import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Routes from "./routes";

Vue.use(VueRouter);

const routes = [
  {
    path: Routes.HOME_PAGE,
    name: "Home",
    component: Home
  },
  {
    path: Routes.CSS_GRID,
    name: "CSS Grid",
    component: () =>
      import(/* webpackChunkName: "css-grid" */ "../views/CSSGrid.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
