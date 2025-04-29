import { RouteRecordRaw } from "vue-router";
import TabsPage from "@/views/TabsPage.vue";

export const tabsRoutes: RouteRecordRaw = {
  path: "/tabs",
  component: TabsPage,
  children: [
    {
      path: "balances",
      component: () => import("@/pages/balances/BalancesLayout.vue"), // یک فایل wrapper بساز
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
      component: () => import("@/pages/expenses/ExpensesLayout.vue"), // یک فایل wrapper بساز
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
      component: () => import("@/pages/groups/GroupsLayout.vue"), // یک فایل wrapper بساز

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
      component: () => import("@/pages/users/UsersLayout.vue"), // یک فایل wrapper بساز

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
      component: () => import("@/pages/friends/FriendsLayout.vue"), // یک فایل wrapper بساز

      children: [
        {
          path: "",
          name: "FriendsList",
          component: () => import("@/pages/friends/FriendsListPage.vue"),
        },
        {
          path: ":id",
          name: "FriendsDetail",
          component: () => import("@/pages/friends/FriendsDetailPage.vue"),
          props: true,
        },
      ],
    },
  ],
};
