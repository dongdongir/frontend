import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import { authRoutes } from "./auth.route";
import { tabsRoutes } from "./tabs.route";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/balances",
  },
  authRoutes,
  tabsRoutes,
  {
    path: "/:pathMatch(.*)*",
    redirect: "/tabs/groups",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
