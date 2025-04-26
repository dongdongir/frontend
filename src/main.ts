import '@/assets/styles/main.less'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initI18n } from '@/i18n'

const app = createApp(App)
const i18n = initI18n

app.use(createPinia())
app.use(router)
app.use(i18n) // خیلی مهمه که این باشه

app.mount('#app')
