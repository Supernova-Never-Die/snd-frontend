import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/MainPage.vue'; // Assume your main page component is named MainPage.vue
import InterestPage from './components/InterestPage.vue'; // This will be your new page for interest rates

const routes = [
  { path: '/', component: MainPage },
  { path: '/main', component: MainPage },
  { path: '/interest', component: InterestPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
