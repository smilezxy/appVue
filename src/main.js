import Vue from "../node_modules/vue/dist/vue.js"

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


//导入路由
import router1 from './router.js'

import app from './app.vue';

new Vue({
	el: '#app',
	router: router1,
	render: c => c(app)
});