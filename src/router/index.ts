import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/auth/login",
  },
  {
    path: "/auth/login",
    component: () => import("@/pages/auth/LoginPage.vue"),
  },
  {
    path: "/auth/register",
    component: () => import("@/pages/auth/RegisterPage.vue"),
  },
  {
    path: "/balances",
    component: () => import("@/pages/balances/BalancesListPage.vue"),
  },
  {
    path: "/balances/:id",
    component: () => import("@/pages/balances/BalanceDetailPage.vue"),
    props: true,
  },
  {
    path: "/expenses",
    component: () => import("@/pages/expenses/ExpensesListPage.vue"),
  },
  {
    path: "/expenses/:id",
    component: () => import("@/pages/expenses/ExpenseDetailPage.vue"),
    props: true,
  },
  {
    path: "/groups",
    component: () => import("@/pages/groups/GroupsListPage.vue"),
  },
  {
    path: "/groups/:id",
    component: () => import("@/pages/groups/GroupDetailPage.vue"),
    props: true,
  },
  {
    path: "/users",
    component: () => import("@/pages/users/UsersListPage.vue"),
  },
  {
    path: "/users/:id",
    component: () => import("@/pages/users/UserDetailPage.vue"),
    props: true,
  },
  {
    path: "/",
    redirect: "/tabs/groups",
  },

  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "groups",
        name: "GroupList",
        component: () => import("@/views/GroupList.vue"),
        children: [
          {
            path: ":id",
            name: "GroupDetail",
            component: () => import("@/views/GroupDetail.vue"),
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
