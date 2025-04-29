import { RouteRecordRaw } from "vue-router";

export const authRoutes: RouteRecordRaw = {
  path: "/auth",
  children: [
    {
      path: "login",
      name: "Login",
      component: () => import("@/pages/auth/LoginPage.vue"),
    },
    {
      path: "register",
      name: "Register",
      component: () => import("@/pages/auth/RegisterPage.vue"),
    },
  ],
};
