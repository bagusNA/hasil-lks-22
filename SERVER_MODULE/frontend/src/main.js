import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)
app.provide('endpoint', 'http://127.0.0.1:8000')

app.mount('#app')
