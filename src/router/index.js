import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OutcomeView from '../views/OutcomeView.vue'
import SearchView from '../views/SearchView.vue'

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
  ]
})

export default router
