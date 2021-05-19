import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './../views/Dashboard'
import Products from './../views/Products'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Dashboard },
    { path: '/products', component: Products },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;