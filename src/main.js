import Vue from "../node_modules/vue/dist/vue.js"
import App from './app.vue';

//注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);
//注册mui的css样式
import '../statics/mui/css/mui.css'



//引入侧边栏
import DrawerLayout from 'vue-drawer-layout'
Vue.use(DrawerLayout)


import vueRouter from 'vue-router';
// 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 导入路由规则对应的组件对象
import home from './components/home.vue';
import customer from './components/customer/customer.vue'
import device from './components/device/device.vue'
import warming from './components/warming/warming.vue'
import order from './components/order/order.vue'

//定义路由规则
var router1 = new vueRouter({
	linkActiveClass: 'mui-active', //改变路由激活时的class名称
	routes: [{
			path: '/',
			redirect: '/home'
		}, // 设置当服务器启动的时候默认进入 /home中
		{
			path: '/home',
			component: home
		}, {
			path: '/customer',
			component: customer
		}, {
			path: '/device',
			component: device
		}, {
			path: '/warming',
			component: warming
		}, {
			path: '/order',
			component: order
		}
	]
});



new Vue({
	el: '#app',
	router: router1,
	render: c => c(App)
});