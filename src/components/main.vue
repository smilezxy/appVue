<template>
  <vue-drawer-layout ref="drawerLayout" :content-drawable="true"  @mask-click="handleMaskClick">>
  	<!-- 侧边栏 -->
    <div class="drawer" slot="drawer">
       <drawer></drawer>
    </div>
    <!-- 主页面 -->
    <div class="content" slot="content">
		<header class="mui-bar mui-bar-nav main-header-bar">
      		<a href="javascript:void(0)" class="mui-icon mui-icon-bars mui-pull-left"  
      		@click="handleToggleDrawer"></a>
      		<h1  class="mui-title">{{title}}</h1>
    	</header>
		<router-view></router-view>

		<!-- 利用mui中的tabbar组件实现系统的底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/customer">
				<span class="mui-icon  mui-icon-person">
				
				</span>
				<span class="mui-tab-label">客户</span>
			</router-link>
			<router-link class="mui-tab-item" to="/device">
				<span class="mui-icon mui-icon-videocam"></span>
				<span class="mui-tab-label">设备</span>
			</router-link>
			<router-link class="mui-tab-item" to="/warming">
				<span class="mui-icon mui-icon-chatboxes"></span>
				<span class="mui-tab-label">告警</span>
			</router-link>
			<router-link class="mui-tab-item" to="/order">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">工单</span>
			</router-link>
		</nav>
    </div>
  </vue-drawer-layout>
</template>

<script>
import drawer from './home/drawer.vue'
 export default {
 	data () {
 		return {
 			title:"首页"
 		}
 	},
    methods: {
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
      },
       handleMaskClick() {
        this.$refs.drawerLayout.toggle(false);
      }
    },
    components:{
		drawer
	},
	created:function () {
		console.log(this.$route.path)
		let router = this.$route.path;
		if(router == '/customer') {
     	this.title = "客户"
     }else  if(router == '/device') {
     	this.title = "设备"
     }else  if(router == '/warming') {
     	this.title = "告警"
     }else  if(router == '/order') {
     	this.title = "工单"
     }else {
     	this.title = "首页"
     }
	},
	watch:{
        '$route.path':function (newVal,oldView) {
            if(newVal == '/customer') {
            	this.title = "客户"
            }else  if(newVal == '/device') {
            	this.title = "设备"
            }else  if(newVal == '/warming') {
            	this.title = "告警"
            }else  if(newVal == '/order') {
            	this.title = "工单"
            }else  if(newVal == '/device/devicedetail/:id') {
     					this.title = "设备详情"
     				}else {
            	this.title = "首页"
            }
        }   
	}
  }
</script>

<style scoped>
.main-header-bar {
  background-color: #24BCE7;
  background-position: initial initial;
  background-repeat: initial initial;
}
.main-header-bar h1, .main-header-bar a{
  color: white;
}

.mui-bar .mui-icon {
  font-size: 20px;
  position: relative;
  z-index: 20;
  padding-top: 10px;
  padding-bottom: 10px;
}

</style>