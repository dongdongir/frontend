import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initI18n } from '@/i18n'

import '@/assets/styles/main.less'
import 'ant-design-vue/dist/reset.css'
import 'virtual:uno.css'
// import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

const app = createApp(App)
// const queryClient = new QueryClient()

app.use(createPinia())
app.use(router)
app.use(initI18n)
// app.use(VueQueryPlugin, { queryClient })

app.mount('#app')
