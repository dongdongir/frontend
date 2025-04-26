import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import { Component } from "ionicons/dist/types/stencil-public-runtime";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/users",
  },
  {
    path: "/auth",
    name: "AuthLayout",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "TheLogin",
        component: () => import("@/views/auth/TheLogin.vue"),
      },
      {
        path: "register",
        name: "TheRegister",
        component: () => import("@/views/auth/TheRegister.vue"),
      },
    ],
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
