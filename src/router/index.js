import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [
        {
            path: '/',
            name: 'Login',
            component: () => import ('@/views/pages/Login/index.vue')
        },
        {
            path: '/financial',
            name: 'FinancialPage',
            component: () => import ('@/containers/TheContainer'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/financial',
                    name: 'FinancialPage',
                    component: () => import ('@/views/pages/Financial/index.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: '/transaction',
                    name: 'TransactionPage',
                    component: () => import ('@/views/pages/Transaction/index.vue'),
                    meta: { requiresAuth: true }
                }
            ]
        }
    ]
}