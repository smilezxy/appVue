import Vue from "../node_modules/vue/dist/vue.js"
import vueRouter from 'vue-router';
// 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);


// 导入路由规则对应的组件对象
import login from './components/login.vue' //登录页
import main from './components/main.vue' //登录进去的主框架
import home from './components/home/home.vue';
import customer from './components/customer/customer.vue'
import device from './components/device/device.vue'
import warming from './components/warming/warming.vue'
import order from './components/order/order.vue'
import  deviceDetail from './components/device/deviceDetail.vue'



//定义路由规则
export default new vueRouter({
	linkActiveClass: 'mui-active', //改变路由激活时的class名称
	routes: [{
			path: '/',
			component: login
		}, // 设置当服务器启动的时候默认进入 login中
		{
			path: '/main',
			component: main,
			children: [{
				path: '/home',
				component: home
			}, {
				path: '/customer',
				component: customer
			}, {
				path: '/device',
				component: device,
			}, {
				path: '/warming',
				component: warming
			}, {
				path: '/order',
				component: order
			},{
				path:'/device/devicedetail/:id',
				component:deviceDetail
			}],
			redirect: '/home'
		},

	]
});