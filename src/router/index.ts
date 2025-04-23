import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/users",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "users",
        name: "UsersPage",
        component: () => import("@/views/UsersPage.vue"),
      },
      {
        path: "events",
        name: "EventsPage",
        component: () => import("@/views/EventsPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
