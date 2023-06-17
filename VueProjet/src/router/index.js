import { createRouter, createWebHistory } from 'vue-router'
import Preview from '../views/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Preview
    }
  ]
})

export default router
