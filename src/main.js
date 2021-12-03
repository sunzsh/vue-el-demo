import Vue from 'vue'
import App from './App.vue'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";

import Cleave from 'cleave.js';
import "cleave.js/dist/addons/cleave-phone.cn";

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);


Vue.use(VXETable)
Vue.use(Element)

Vue.config.productionTip = false

Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$XPrint = VXETable.print
Vue.prototype.$XSaveFile = VXETable.saveFile
Vue.prototype.$XReadFile = VXETable.readFile


Vue.directive('cleave', {
  inserted: (el, binding) => {
    let inputel = el;
    if (el.tagName.toLowerCase() != "input") {
      inputel = el.querySelector("input");
    }
    inputel.cleave = new Cleave(inputel, binding.value || {})
  },
  update: (el) => {
      const event = new Event('input', {bubbles: true});
      setTimeout(function () {

          let inputel = el;
          if (el.tagName.toLowerCase() != "input") {
            inputel = el.querySelector("input");
          }

          inputel.value = inputel.cleave.properties.result
          inputel.dispatchEvent(event)
      }, 100);
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
