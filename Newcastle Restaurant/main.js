//reference from:https://gitee.com/umicro/uView2.0/blob/master/main.js
//Referencing the general framework and making applicable changes to this APP
import Vue from 'vue'
import App from './App'
import http from '@/common/vmeitime-http/'
Vue.config.productionTip = false

App.mpType = 'app'
const get = http.get
const post = http.post
Vue.prototype.$api = {
	get,
	post
};
const app = new Vue({
	...App
})
app.$mount()