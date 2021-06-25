import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import Router from 'vue-router'

import CmCalendarDemo from "@/views/cm-calendar-demo";

Vue.use(Router)
Vue.use(Element)

Vue.config.productionTip = false

let router = new Router({
  mode: 'history',  // 去掉url中的#
  routes: [ 
    { path: '/cm-calendar-demo', component: CmCalendarDemo }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
