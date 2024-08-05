import { createRouter, createWebHistory } from 'vue-router'

import UserOrders from '../views/UserOrdersView.vue'
import HomeView from '@/views/HomeView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/orders',
      name: 'UserOrders',
      component: UserOrders
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }
  ]
})
