import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/agenda',
      name: 'agenda',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AgendaView.vue')
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: () => import('../views/SpeakersView.vue')
    }
  ]
})

export default router
