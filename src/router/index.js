import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      children:[
        {
          // 默认二级路由path配置项置空
          path:'',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path:'category/:id',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path:'category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue'),
        },
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
    },
  ],
})

export default router
