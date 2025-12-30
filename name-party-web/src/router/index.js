import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/game',
      name: 'create-game',
      component: () => import('../views/CreateView.vue'),
    },
    {
      path: '/game/:gameId',
      name: 'game',
      component: () => import('../views/GameView.vue'),
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.gameId === 'error') {
          // TODO: Check if game exists and make fallback
          next('/home')
        } else {
          next()
        }
      },
    },
  ],
})

export default router
