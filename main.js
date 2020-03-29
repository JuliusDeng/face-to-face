import Vue from 'vue'
import App from './App'


// 引入request.js
import $H from "@/common/lib/request.js"
Vue.prototype.$H = $H
// 引入时间time.js
import $Time from "@/common/lib/time.js"
Vue.prototype.$Time = $Time


// 引入全局导航navigate
Vue.prototype.$navigate = function navigate(path) {
		if(!path) return;
		uni.navigateTo({
			url: `/pages/${path}/${path}`,
			success: res => {},
			fail: () => {console.log("navigate 跳转失败");},
			complete: () => {}
		});
	}




Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
})
app.$mount()
