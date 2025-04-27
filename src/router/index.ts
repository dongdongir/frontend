import { createRouter, createWebHistory } from 'vue-router'
import TheApp from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'TheApp',
      component: () => import('@/App.vue'),
      children: [
        {
          path: '',
          name: 'AppLayout',
          component: () => import('@/layouts/AppLayout.vue'),
        },
        {
          path: 'auth',
          name: 'TheAuth',
          component: () => import('@/layouts/AuthLayout.vue'),
          children: [
            {
              path: 'login',
              name: 'TheLogin',
              component: () => import('@/views/auth/TheLogin.vue'),
            },
            {
              path: 'register',
              name: 'TheRegister',
              component: () => import('@/views/auth/TheRegister.vue'),
            },
          ],
        },
      ],
    },
  ],
})

export default router
