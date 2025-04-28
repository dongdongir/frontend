import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/auth/login",
  },
  {
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
  },
  {
    path: "/tabs",
    component: TabsPage,
    children: [
      {
        path: "balances",
        name: "Balances",
        children: [
          {
            path: "",
            name: "BalancesList",
            component: () => import("@/pages/balances/BalancesListPage.vue"),
          },
          {
            path: ":id",
            name: "BalanceDetail",
            component: () => import("@/pages/balances/BalanceDetailPage.vue"),
            props: true,
          },
        ],
      },
      {
        path: "expenses",
        name: "Expenses",
        children: [
          {
            path: "",
            name: "ExpensesList",
            component: () => import("@/pages/expenses/ExpensesListPage.vue"),
          },
          {
            path: ":id",
            name: "ExpenseDetail",
            component: () => import("@/pages/expenses/ExpenseDetailPage.vue"),
            props: true,
          },
        ],
      },
      {
        path: "groups",
        name: "Groups",
        children: [
          {
            path: "",
            name: "GroupsList",
            component: () => import("@/pages/groups/GroupsListPage.vue"),
          },
          {
            path: ":id",
            name: "GroupDetail",
            component: () => import("@/pages/groups/GroupDetailPage.vue"),
            props: true,
          },
        ],
      },
      {
        path: "users",
        name: "Users",
        children: [
          {
            path: "",
            name: "UsersList",
            component: () => import("@/pages/users/UsersListPage.vue"),
          },
          {
            path: ":id",
            name: "UserDetail",
            component: () => import("@/pages/users/UserDetailPage.vue"),
            props: true,
          },
        ],
      },
      {
        path: "friends",
        name: "FriendList",
        component: () => import("@/views/FriendList.vue"),
      },
    ],
  },
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
