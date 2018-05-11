<template>
	<div class="mui-content">
		<div class="menu-head-layout">
			<div class="mui-pull-left menu-head-img-layout">
				<img class="menu-head-img" src="../../../statics/image/default-avatar.png" />
			</div>
			<div class="menu-head-content-layout-wrapper">
				<div class="menu-head-content-layout">
					<div class="menu-head-content">
						<div id='head-staff' class="text-wrap-dot">显示名称</div>
						<div class="text-wrap-dot" style="font-size: 12px;">账号: 
							<span id='head-account'>账号信息</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<span class="menu-action-title">切换皮肤</span>
			</li>
			<li class="mui-table-view-cell">
				<span class="menu-action-title">版本号</span>
			</li>
			<li class="mui-table-view-cell">
				<span class="menu-action-title">检查更新</span>
			</li>
			<li class="mui-table-view-cell">
				<span class="menu-action-title">退出登录</span>
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default {
		methods:{
			
		}
	}
</script>
<style scoped>
.menu-head-layout {
	height:80px;
	background-color:#24BCE7;
	color:#fff;
	padding-left: 10px;
}
.menu-action-title {
  color: black;
  font-size: 15px;
  margin-left: 5px;
}
.menu-head-img-layout {
  height: 100%;
  display: flex;
}
.menu-head-img {
  height: 50px;
  margin: auto 0px;
}
.menu-head-content-layout-wrapper {
  overflow: hidden;
  height: 100%;
  padding-left: 5px;
}

.menu-head-content-layout {
  width: 100%;
  display: flex;
  height: 100%;
}

.menu-head-content {
  margin: auto 0px;
  width: 100%;
  text-align: left;
  font-size: 15px;
}

</style>