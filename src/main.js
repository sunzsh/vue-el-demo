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

Date.prototype.format = function(fmt) { 
  var o = { 
     "M+" : this.getMonth()+1,                 //月份 
     "d+" : this.getDate(),                    //日 
     "h+" : this.getHours(),                   //小时 
     "m+" : this.getMinutes(),                 //分 
     "s+" : this.getSeconds(),                 //秒 
     "q+" : Math.floor((this.getMonth()+3)/3), //季度 
     "S"  : this.getMilliseconds()             //毫秒 
 }; 
 if(/(y+)/.test(fmt)) {
         fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
 }
  for(var k in o) {
     if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
  }
 return fmt; 
}      

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
