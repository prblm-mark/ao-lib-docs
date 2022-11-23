import { createRouter, createWebHistory } from 'vue-router'
import TypeView from '../views/TypeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'type',
            component: TypeView,
        },
        {
            path: '/buttons',
            name: 'buttons',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/ButtonsView.vue'),
        },
    ],
})

export default router
