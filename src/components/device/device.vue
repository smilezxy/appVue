<template>
  <div>
        <div style="padding:0 10px;margin-top:45px;" class="main_bg">
             <div class="mui-input-row mui-search">
                <input type="search" style="background-color: white; height: 32px;"  class="mui-input-clear" placeholder="输入您想要查找的设备名称">
             </div>            
        </div>
        
    <scroller style="margin-top: 100px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              ref="my_scroller">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in deviceList" :key="index" @click="onItemClick(item.id)">
                <img class="device_img mui-pull-left" src="../../../statics/image/no_image.jpg">
                <div class="mui-media-body">
                 {{item.label}}
                <p class='mui-ellipsis'>
                  序列号：{{item.sn}}

                </p>
                </div>
            </li>
        </ul>
    </scroller>
  </div>
</template>

<script>
import {
	Toast
} from 'mint-ui';
export default {
  data() {
    return {
      searchValue: "",
      customersData:{},
      resourceCondition:{},
      queryParams:{
		      "start": 0,
		      "length": 10,
		      "sort": "createTime",
		      "sortType": "desc",
		      "statCount": true
      },
      deviceList:[]
    }
  },
  methods: {
    getAllCustomerInfoList () {
       appFutureImpl.getAllCustomerInfoList((result) => {
          if(null != result) {
            this.customersData = {};
				    for(var i = 0; i < result.length; i++) {
				    	this.customersData[result[i].id + ""] = result[i].customerName;
				    }
          }
          this.queryParams.start = 0;
			    this.queryParams.statCount = true;
			    this.queryParams.total = 0;
          appFutureImpl.getDevicesByConditionWithPage([this.resourceCondition, this.queryParams],(result,total,msg) => {
              if(msg == null) {
                  this.queryParams.start = this.queryParams.start + this.queryParams.length;
					        this.queryParams.statCount = false;
					        this.queryParams.total = total;
              }else {
                Toast(msg);
					      return;
              }
              this.deviceList = result;
          })
       })
    },
    //一开始加载的时候下拉刷新的时候请求数据
    refresh(done) {
      this.getAllCustomerInfoList()
      done()
    },
    //每当向上滑动的时候去请求数据
    infinite(done) {
      if(this.queryParams.start > this.queryParams.total) {
        done()
		  	return;
      }
      appFutureImpl.getDevicesByConditionWithPage([this.resourceCondition, this.queryParams],(result,total,msg) => {
              if(msg == null) {
                this.queryParams.start = this.queryParams.start + this.queryParams.length;
				        this.queryParams.statCount = false;
				        this.queryParams.total = total;
              }else {
                Toast(msg);
					      return;
              }
              this.deviceList = result;
              console.log(this.deviceList)
          })
      
      done()
    },

    onItemClick(index, item) {
      console.log(index);
    }
  }
};
</script>
<style scoped>
.device_img {
    width: 80px;
    height: 4.0rem !important;
    margin-right: 8px;
}
</style>

