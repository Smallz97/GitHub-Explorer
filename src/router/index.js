import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/routes/NotFound.vue";
import HeroPage from "@/routes/HeroPage.vue";
import SearchUsers from "@/routes/SearchUsers.vue";
import ViewRepository from "@/routes/ViewRepository"


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