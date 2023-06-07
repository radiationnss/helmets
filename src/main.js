import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import store from './store'

axios.defaults.baseURL = 'http://localhost:8000'


createApp(App).use(store).use(router, axios).mount('#app')
