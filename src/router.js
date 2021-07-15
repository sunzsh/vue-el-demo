
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
var routes = [
    {path: '/cm-calendar', component: ()=> import(/* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue") },
    {path: '/sticky', component: ()=> import(/* webpackChunkName: "sticky-demo" */ "@/views/sticky-demo.vue") },
    {path: '/elinputwidth', component: ()=> import(/* webpackChunkName: "elinputwidth-demo" */ "@/views/elinputwidth-demo.vue") },
    {path: '/boxsizing-width', component: ()=> import(/* webpackChunkName: "boxsizing-width" */ "@/views/boxsizing-width.vue") },
    {path: '/boxsizing-height', component: ()=> import(/* webpackChunkName: "boxsizing-height" */ "@/views/boxsizing-height.vue") }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
