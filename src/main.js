import { createApp } from 'vue'
import './scss/my_style.css'
import App from './App.vue'
import router from './utils/router'

createApp(App).use(router).mount('#app')
