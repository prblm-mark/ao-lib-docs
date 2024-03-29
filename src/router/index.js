import { createRouter, createWebHashHistory } from 'vue-router'
import ColorPaletteView from '../views/ColorPaletteView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'color-palette',
            component: ColorPaletteView,
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: () => import('../views/ButtonsView.vue'),
        },
        {
            path: '/form-elements',
            name: 'form-elements',
            component: () => import('../views/FormsView.vue'),
        },
        {
            path: '/theme-colors',
            name: 'theme-colors',
            component: () => import('../views/ColorsView.vue'),
        },
        {
            path: '/typography',
            name: 'typography',
            component: () => import('../views/TypeView.vue'),
        },
        {
            path: '/cards',
            name: 'cards',
            component: () => import('../views/CardView.vue'),
        },
        {
            path: '/flex-columns',
            name: 'flex-columns',
            component: () => import('../views/FlexColumnView.vue'),
        },
        {
            path: '/grid',
            name: 'grid',
            component: () => import('../views/GridView.vue'),
        },
        {
            path: '/filters',
            name: 'filters',
            component: () => import('../views/FiltersView.vue'),
        },
        {
            path: '/font-sizes',
            name: 'font-sizes',
            component: () => import('../views/FontSizeView.vue'),
        },
        {
            path: '/font-weights',
            name: 'font-weights',
            component: () => import('../views/FontWeightView.vue'),
        },
        {
            path: '/letter-spacing',
            name: 'letter-spacing',
            component: () => import('../views/LetterSpacingView.vue'),
        },
        {
            path: '/line-height',
            name: 'line-height',
            component: () => import('../views/LineHeightView.vue'),
        },
        {
            path: '/text-align',
            name: 'text-align',
            component: () => import('../views/TextAlignView.vue'),
        },
        {
            path: '/breakpoints',
            name: 'breakpoints',
            component: () => import('../views/BreakpointsView.vue'),
        },
        {
            path: '/borders',
            name: 'borders',
            component: () => import('../views/BordersView.vue'),
        },
        {
            path: '/display',
            name: 'display',
            component: () => import('../views/DisplayView.vue'),
        },
        {
            path: '/effects',
            name: 'effects',
            component: () => import('../views/EffectsView.vue'),
        },
        {
            path: '/margin',
            name: 'margin',
            component: () => import('../views/MarginView.vue'),
        },
        {
            path: '/padding',
            name: 'padding',
            component: () => import('../views/PaddingView.vue'),
        },
        {
            path: '/width',
            name: 'width',
            component: () => import('../views/WidthView.vue'),
        },
        {
            path: '/height',
            name: 'height',
            component: () => import('../views/HeightView.vue'),
        },
    ],
})

export default router
