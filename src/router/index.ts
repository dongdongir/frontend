import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
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
