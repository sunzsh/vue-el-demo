import Vue from 'vue'
import App from './App.vue'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";

Vue.use(VXETable)
Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$XPrint = VXETable.print
Vue.prototype.$XSaveFile = VXETable.saveFile
Vue.prototype.$XReadFile = VXETable.readFile


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
