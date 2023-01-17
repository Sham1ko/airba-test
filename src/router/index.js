import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/airba-test/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/airba-test/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/airba-test/:id",
      name: "details",
      component: () => import("../views/DetailView.vue"),
    },
  ],
});

export default router;
