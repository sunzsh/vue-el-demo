
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
var routes = [
    {path: '/cm-calendar', component: ()=> import(/* webpackChunkName: "cm-calendar-demo" */ "@/views/cm-calendar-demo.vue") },
    {path: '/sticky', component: ()=> import(/* webpackChunkName: "sticky-demo" */ "@/views/sticky-demo.vue") },
    {path: '/chat', component: ()=> import(/* webpackChunkName: "chat-demo" */ "@/views/chat-demo.vue") },
    {path: '/boxsizing-width', component: ()=> import(/* webpackChunkName: "boxsizing-width" */ "@/views/boxsizing-width.vue") },
    {path: '/boxsizing-height', component: ()=> import(/* webpackChunkName: "boxsizing-height" */ "@/views/boxsizing-height.vue") },
    {path: '/elinputclass', component: ()=> import(/* webpackChunkName: "elinputclass" */ "@/views/elinputclass-demo.vue") },
    {path: '/scoped1', component: ()=> import(/* webpackChunkName: "scoped1" */ "@/views/scoped1.vue") },
    {path: '/scoped2', component: ()=> import(/* webpackChunkName: "scoped2" */ "@/views/scoped2.vue") },
    {path: '/vxe-table', component: ()=> import(/* webpackChunkName: "vxe-table" */ "@/views/vxe-table.vue") },
    {path: '/datetimepicker', component: ()=> import(/* webpackChunkName: "datetimepicker" */ "@/views/datetimepicker.vue") },
    {path: '/cm-tree-demo', component: ()=> import(/* webpackChunkName: "cm-tree-demo" */ "@/views/cm-tree-demo.vue") },
    {path: '/cleave', component: ()=> import(/* webpackChunkName: "cleave" */ "@/views/cleave.vue") },
    {path: '/avue', component: ()=> import(/* webpackChunkName: "avue" */ "@/views/avue.vue") },
    {path: '/avue2', component: ()=> import(/* webpackChunkName: "avue2" */ "@/views/avue2.vue") },
    {path: '/blur_submit_demo', component: ()=> import(/* webpackChunkName: "blur_submit_demo" */ "@/views/blur_submit_demo.vue") },
    {path: '/stash-demo', component: ()=> import(/* webpackChunkName: "stash_demo" */ "@/views/stash-demo.vue") },
    {path: '/el-selectoffset', component: ()=> import(/* webpackChunkName: "el-selectoffset" */ "@/views/el-selectoffset.vue") },
    {path: '/dialogtable', component: ()=> import(/* webpackChunkName: "dialogtable" */ "@/views/dialogtable.vue") },
    {path: '/table_fixedheader', component: ()=> import(/* webpackChunkName: "table_fixedheader" */ "@/views/table_fixedheader.vue") },
    {path: '/eltable_print', component: ()=> import(/* webpackChunkName: "eltable_print" */ "@/views/eltable_print.vue") },
    {path: '/table3', component: ()=> import(/* webpackChunkName: "table3" */ "@/views/table3.vue") },
    {path: '/table-dropdown', component: ()=> import(/* webpackChunkName: "table-dropdown" */ "@/views/table-dropdown.vue") },
    {path: '/createElement-bind', component: ()=> import(/* webpackChunkName: "createElement-bind" */ "@/views/createElement-bind.vue") },
    {path: '/v-table-scroll', component: ()=> import(/* webpackChunkName: "v-table-scroll" */ "@/views/v-table-scroll.vue") },
    {path: '/tooltip-text', component: ()=> import(/* webpackChunkName: "tooltip-text" */ "@/views/tooltip-text.vue") },
    {path: '/currency', component: ()=> import(/* webpackChunkName: "currency" */ "@/views/currency.vue") },
    {path: '/prepared', component: ()=> import(/* webpackChunkName: "prepared" */ "@/views/prepared.vue") },
    {path: '/disabled', component: ()=> import(/* webpackChunkName: "disabled" */ "@/views/disabled.vue") },
    {path: '/shake', component: ()=> import(/* webpackChunkName: "shake" */ "@/views/shake.vue") },
    {path: '/auto-select', component: ()=> import(/* webpackChunkName: "auto-select" */ "@/views/auto-select.vue") },
    
    
    
    
    
];

const router = new VueRouter({
    mode: 'history',
    routes
})
let count = 0;

// router.beforeEach((to, from, next) => {
    // console.log(to.path);
    // if (to.path === '/scoped1' && count == 0) {
    //     router.push('/scoped2')
    //     count++;
    //     // next();
    // } else {
    //     next();
    // }
//   })
export default router
