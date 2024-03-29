import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OutcomeView from '../views/OutcomeView.vue'
import SearchView from '../views/SearchView.vue'
import LoginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/OutcomeView',
      name: 'OutcomeView',
      component: OutcomeView
    },
    {
      path: '/SearchView',
      name: 'SearchView',
      component: SearchView
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    },
  ]
})

export default router
