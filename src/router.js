
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
var routes = [
    {path: '/cm-calendar', component: ()=> import(/* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue") },
    {path: '/sticky', component: ()=> import(/* webpackChunkName: "sticky-demo" */ "@/views/sticky-demo.vue") },
    {path: '/chart', component: ()=> import(/* webpackChunkName: "chart-demo" */ "@/views/chart-demo.vue") },
    {path: '/boxsizing-width', component: ()=> import(/* webpackChunkName: "boxsizing-width" */ "@/views/boxsizing-width.vue") },
    {path: '/boxsizing-height', component: ()=> import(/* webpackChunkName: "boxsizing-height" */ "@/views/boxsizing-height.vue") },
    {path: '/elinputclass', component: ()=> import(/* webpackChunkName: "elinputclass" */ "@/views/elinputclass-demo.vue") },
    {path: '/scoped1', component: ()=> import(/* webpackChunkName: "scoped1" */ "@/views/scoped1.vue") },
    {path: '/scoped2', component: ()=> import(/* webpackChunkName: "scoped2" */ "@/views/scoped2.vue") },
    {path: '/vxe-table', component: ()=> import(/* webpackChunkName: "vxe-table" */ "@/views/vxe-table.vue") },
    {path: '/datetimepicker', component: ()=> import(/* webpackChunkName: "datetimepicker" */ "@/views/datetimepicker.vue") },
    {path: '/cm-tree-demo', component: ()=> import(/* webpackChunkName: "cm-tree-demo" */ "@/views/cm-tree-demo.vue") }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
