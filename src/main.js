import { createApp } from 'vue'
import App from './App.vue'
import store from './assets/index';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';

createApp(App).use(router).use(store).mount('#app')
