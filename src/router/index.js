import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */ '@/views/index/Index.vue'),
        meta: {
            title: '首页'
        }
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router
