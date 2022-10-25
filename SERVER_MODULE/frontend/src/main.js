import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)
app.provide('endpoint', 'http://13.250.25.73/rest-low')

app.mount('#app')
