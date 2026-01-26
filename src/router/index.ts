import { createRouter, createWebHistory } from 'vue-router'
import PricingView from '@/views/PricingView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/pricing', 
      name: 'Pricing', 
      component: PricingView},
      
    {path: '/', 
      name: 'Dashboard', 
      component: DashboardView},

  ],
})

export default router
