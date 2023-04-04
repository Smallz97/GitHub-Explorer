import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/components/NotFound.vue";
import HeroPage from "@/components/HeroPage.vue";
import SearchUsers from "@/components/SearchUsers.vue";
import ViewRepository from "@/components/ViewRepository"


const routes = [
  {
    path: "/",
    component: HeroPage,
  },
  {
    path: "/searchusers",
    component: SearchUsers,
    children: [
      {
        path: "viewrepository",
        component: ViewRepository,
        props: (route) => ({ repository: route.params.repository }),
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;