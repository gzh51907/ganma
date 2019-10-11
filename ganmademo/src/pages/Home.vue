<template>
  <div id="box" style="width:100%;height:100% ">
    <div class="headers" style="display:flex;background:white">
      <div class="header" style="width:90%">
        <span class="el-icon-search"></span>
        <input type="text" class="sou" />
      </div>
      <div class="headright" style="margin-top:10px;margin-right:10px">
        <i class="el-icon-chat-dot-round"></i>
      </div>
    </div>
    <div class="lbt">
      <el-carousel :interval="5000" arrow="always" style="height:146.512px;">
        <el-carousel-item v-for="item in lbt" :key="item" style="height:146.512px;">
          <h3 style="height:100%"><img :src="item.img" alt="" style="width:100%;height:100%"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lbt: [{
        img:'https://respic.wzq998.com//uploads/ads/20190823/b6e449a7d3d07cebb09a9f842c46dd33.png'
      },{
        img:'https://respic.wzq998.com//uploads/ads/20190912/ba687e24c444af80cd6b9aae9ab8c15e.png'
      },{
        img:'https://respic.wzq998.com//uploads/ads/20190912/7c0c60c16a0ae2014a0ed50b93ad5192.png'
      },{
        img:'https://respic.wzq998.com//uploads/ads/20190814/5fbc5ba49338bf424cd13c390b7de442.png'
      },{
        img:'https://respic.wzq998.com//uploads/ads/20190814/63bd7d42d859cb3641cc2d5cf23e585f.png'
      }]
    };
  },

  async created() {
    // 发起ajax请求
    let sessionId = "";
    let recId = "";
    let data = await this.$axios.get(
      "https://api.wzq998.com/api/index/guess?token=&mac_no=&page=2&pageSize=6"
    );
    console.log(data);
  }
};
</script>

<style scoped lang="scss">
#box {
  background: #efefef;
}
.header {
  width: 100%;
  padding: 0.68rem 0;
  text-align: center;
}
.sou {
  border: none;
  border-color: white;
  /* width: 100%;
    font-size: 0.74666667rem;
    padding: 0.18rem 0 0.18rem 2rem;
    background: white; */
  border-bottom: 1px solid black;
}

//轮播图
.lbt {
  width: 375px;
  height: 145px;

  margin: 0.53333333rem auto;
 

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;

    margin: 0;
  }

  

}
</style>