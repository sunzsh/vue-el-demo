import Vue from 'vue'
import App from './App.vue'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";

import store from './components/vuexstore'

import Cleave from 'cleave.js';
import "cleave.js/dist/addons/cleave-phone.cn";

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import InBody from './components/InBody.vue';
import Test from './components/Test.vue';


import currency from 'currency.js';
Vue.prototype.currency = v => currency(v, { symbol: '￥' });

Vue.prototype.fmtMoney = value => Vue.prototype.currency(value).format();
Vue.prototype.fmtMoney2 = v => currency(v, { symbol: '' }).format();




import ElTable3 from './components/el-table3.vue';
Vue.component('el-table3', ElTable3);



import ElTable4 from './components/el-table4.vue';
Vue.component('el-table4', ElTable4);



import ElTable5 from './components/el-table5.vue';
Vue.component('el-table5', ElTable5);


import Cookies from 'js-cookie'
Vue.prototype.$cookie = Cookies;

// window.requestAnimationFrame = null;

import './assets/icons' // icon

Vue.component('in-body', InBody);
Vue.component('test', Test);

Vue.use(Avue);


Vue.use(VXETable)

import locale from 'element-ui/lib/locale/lang/zh-CN'
// locale.el.datepicker.months = {
//   jan: '1月',
//   feb: '2月',
//   mar: '3月',
//   apr: '4月',
//   may: '5月',
//   jun: '6月',
//   jul: '7月',
//   aug: '8月',
//   sep: '9月',
//   oct: '10月',
//   nov: '11月',
//   dec: '12月'
// };

Vue.use(Element, { locale })


Vue.config.productionTip = false

Vue.prototype.$XModal = VXETable.modal
Vue.prototype.$XPrint = VXETable.print
Vue.prototype.$XSaveFile = VXETable.saveFile
Vue.prototype.$XReadFile = VXETable.readFile

import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs








import CopyClearBr from './components/CopyClearBr.js'
Vue.use(CopyClearBr)










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

Vue.prototype.$fullRouter = router;
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
