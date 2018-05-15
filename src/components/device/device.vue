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
            <!-- <li class="mui-table-view-cell" @click="onItemClick(index,item)">{{item}}</li> -->
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in items" :key="index">
                <img class="device_img mui-pull-left" src="../../../statics/image/no_image.jpg">
                <div class="mui-media-body">
                 幸福
                <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                </div>
            </li>
        </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      searchValue: "",
      customersData:{}
    };
  },
  created () {
     this.getAllCustomerInfoList ()
  },
  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.items.push(i + " - keep walking, be 2 with you.");
    }

    this.top = 1;
    this.bottom = 20;
  },

  methods: {
    getAllCustomerInfoList () {
       appFutureImpl.getAllCustomerInfoList((data) => {
          console.log(data)
          if(null != result) {
				    for(var i = 0; i < result.length; i++) {
				    	customersData[result[i].id + ""] = result[i].customerName;
				    }
			    }
       })
    },
    //一开始加载的时候下拉刷新的时候请求数据
    refresh(done) {
      setTimeout(() => {
        let start = this.top - 1;

        for (let i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + " - keep walking, be 2 with you.");
        }

        this.top = this.top - 10;

        done();
      }, 1500);
    },
    //每当向上滑动的时候去请求数据
    infinite(done) {
      console.log("infinite called..");

      setTimeout(() => {
        let start = this.bottom + 1;

        for (let i = start; i < start + 10; i++) {
          this.items.push(i + " - keep walking, be 2 with you.");
        }

        this.bottom = this.bottom + 10;

        done();
      }, 1500);
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

