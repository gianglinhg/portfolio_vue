import { createApp } from 'vue'
import './style.css'
import axios from 'axios'
import App from './App.vue'
window.axios = axios

createApp(App).mount('#app')
