import { createRouter, createWebHistory } from "vue-router";
// import NotFound from "@/components/NotFound.vue";
import MyRepos from "@/components/MyRepos.vue";
import HomePage from "@/components/HomePage.vue";


const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/myrepos",
    component: MyRepos,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   name: "NotFound",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;