import { createRouter, createWebHistory } from "vue-router";
// import NotFound from "@/components/NotFound.vue";
import SearchUserPage from "@/components/SearchUserPage.vue";
import HeroPage from "@/components/HeroPage.vue";


const routes = [
  {
    path: "/",
    component: HeroPage,
  },
  {
    path: "/searchuserpage",
    component: SearchUserPage,
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