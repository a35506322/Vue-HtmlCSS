import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import('../views/Flex.vue')
  },
  {
    path: '/no8website',
    name: 'No8Website',
    component: () => import('../views/No8Website.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'vuecssmanagement',
        name: 'VuecssManagement',
        component: () => import('../views/VueCssManagement.vue')
      },
      {
        path: 'html1',
        name: 'Html1',
        component: () => import('../views/Html1.vue')
      },
      {
        path: 'html2',
        name: 'Html2',
        component: () => import('../views/Html2.vue')
      },
      {
        path: 'composing1',
        name: 'Composing1',
        component: () => import('../views/Composing1.vue')
      },
      {
        path: 'composing2',
        name: 'Composing2',
        component: () => import('../views/Composing2.vue')
      },
      {
        path: 'marginpadding',
        name: 'MarginPadding',
        component: () => import('../views/MarginPadding.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
