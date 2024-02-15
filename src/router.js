import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './components/Pages/MainPage.vue';
import InterestPage from './components/Pages/InterestPage.vue';
import DashboardComponent from './components/Pages/DashboardPage.vue'; // This will be your new page for the dashboard
import LendingComponent from './components/Pages/LendingPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/main', component: MainPage },
  { path: '/interest', component: InterestPage },
  { path: '/dashboard', component: DashboardComponent },
  { path: '/LendingComponent', component: LendingComponent },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
