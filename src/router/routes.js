
const routes = [
  {
    path: '/',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/home',
    component: () => import('../components/Home.vue'),
   
  },
  {
    path: '/register',
    component: () => import('../components/Register.vue'),
   
  },
  {
    path: '/level/:level',
    component: () => import('../components/Level.vue'),
   
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
