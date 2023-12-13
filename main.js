import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import './pages/assets/global.scss'
import uView from 'uview-ui'
import store from './pages/store';

Vue.config.productionTip = false
Vue.use(uView)
App.mpType = 'app'
import 'uview-ui/index.scss'
const app = new Vue({
	store,
	...App
})
// 引入请求封装，将app参数传递到配置中
require('@/pages/config/request.js')(app)
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif