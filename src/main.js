import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";

Vue.use(Element)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
