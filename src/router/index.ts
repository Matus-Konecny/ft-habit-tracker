import { createRouter, createWebHistory } from 'vue-router'
import PricingView from '@/views/PricingView.vue'
import DashboardView from '@/views/DashboardView.vue'
import MyhabitsView from '@/views/MyhabitsView.vue'
import ProgressView from '@/views/ProgressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', 
      name: 'Dashboard', 
      component: DashboardView},

    {path: '/myhabits', 
      name: 'MyHabits', 
      component: MyhabitsView},

    {path: '/progress', 
      name: 'Progress', 
      component: ProgressView},

    {path: '/pricing', 
      name: 'Pricing', 
      component: PricingView},

  ],
})

export default router
