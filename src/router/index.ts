import { createRouter, createWebHistory } from 'vue-router'
import PricingView from '@/views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/pricing', 
      name: 'Pricing', 
      component: PricingView},

  ],
})

export default router
