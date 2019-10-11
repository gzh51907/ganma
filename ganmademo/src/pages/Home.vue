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
        <el-carousel-item v-for="item in lbt" :key="item.img" style="height:146.512px;">
          <h3 style="height:100%">
            <img :src="item.img" alt style="width:100%;height:100%" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- lbt下 -->
    <div class="riesa">
      <div v-for="item in riesa" :key="item.id" style="margin-top:11px">
        <p style="text-align:center;padding:0;margin:0">
          <img :src="item.img" alt />
        </p>
        <p style="padding:0;margin:0;margin-top:5px" class="p1">{{item.name}}</p>
      </div>
    </div>
    <!-- 免费开店 -->
    <div
      class="news"
      style="display: block;width: 95%; margin: 0 auto 1.06666667rem auto; min-height: 4.8rem;"
    >
      <img
        style="width:100%;height:100%"
        src="https://respic.wzq998.com//uploads/ads/20190815/058d6f80d5fb4f17a50ef2848fe4a23c.gif"
        alt
      />
    </div>

    <!-- new下 -->
    <div class="super">
      <div class="superimg">
        <img
          src="https://api.wzq998.com/Forestproducts/public/static/api/img/home_promotion.png"
          alt
        />
      </div>
      <div class="row">
        <div>
          <p class="rowp1">
            <img
              src="https://respic.wzq998.com//uploads/goods/20191008/223921eb91d3bb209fe0c830622890c0.jpg"
              alt
            />
          </p>
          <span
            style="width: 80%; margin: 0.3rem auto;font-size: 14px;overflow: hidden;-ms-text-overflow: ellipsis;text-overflow: ellipsis;white-space: nowrap;color: #5d5d5d;display:block"
          >王子清 蜂巢蜜500g*2</span>
          <p style="display: block;position: relative;width: 80%;margin: 0.3rem auto;">
            <span
              style="  position: relative; display: inline-block;font-size: 16px;color: #fa6969;padding-right: 5px;left: 0;top: 0;"
            >￥69.90</span>
            <del
              style=" display: inline-block;position: relative;font-size: 14px;color: #cdcdcd;left: 0;top: 0;"
            >￥89.00</del>
          </p>
        </div>

        <div>
          <p class="rowp1">
            <img
              src="https://respic.wzq998.com//uploads/goods/20190930/cc8ced8e51769b2696a9e20817032a2e.jpg"
              alt
            />
          </p>
          <span
            style="width: 80%; margin: 0.3rem auto;font-size: 14px;overflow: hidden;-ms-text-overflow: ellipsis;text-overflow: ellipsis;white-space: nowrap;color: #5d5d5d;display:block"
          >干巴菌韭菜花*3</span>
          <p style="display: block;position: relative;width: 80%;margin: 0.3rem auto;">
            <span
              style="  position: relative; display: inline-block;font-size: 16px;color: #fa6969;padding-right: 5px;left: 0;top: 0;"
            >￥29.90</span>
            <del
              style=" display: inline-block;position: relative;font-size: 14px;color: #cdcdcd;left: 0;top: 0;"
            >￥49.90</del>
          </p>
        </div>
      </div>
    </div>

    <!-- 赶马自营 -->
    <div class="self">
      <p class="selfp1">赶马自营</p>
      <div class="selfxia">
        <div style="float:left;width:50%">
          <div class="selfxia1">
            <p
              style="padding-left: 0.26666667rem;font-size: 0.74666667rem;color: #5d5d5d;padding:0;margin:0;margin-top:1%;"
            >下饭菜</p>
            <p
              style="font-size: 0.64rem;color: #5d5d5d;padding: 0.16rem 0 0.16rem 0.26666667rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding:0;margin:0;margin-top:1%"
            >好心情，好胃口，健康好帮手</p>
          </div>
          <div class="selfimg" style="width:100%">
            <p style="margin:0;padding:0">
              <img
                style="width:40%; border-radius:10% "
                src="https://respic.wzq998.com//uploads/ads/20190912/5b463a7a855f512ef08def8049bd335e.jpg"
                alt
              />
              <img
                style="width:40%; border-radius:10%;margin-left:1% "
                src="https://respic.wzq998.com//uploads/ads/20190912/05092ad226082876e998bc17153e6255.jpg"
                alt
              />
            </p>
          </div>
        </div>

        <div style="float:left;width:50%">
          <div class="selfxia1">
            <p
              style="padding-left: 0.26666667rem;font-size: 0.74666667rem;color: #5d5d5d;padding:0;margin:0;margin-top:1%;"
            >排行榜</p>
            <p
              style="font-size: 0.64rem;color: #5d5d5d;padding: 0.16rem 0 0.16rem 0.26666667rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding:0;margin:0;margin-top:1%"
            >赶马山货，敬天重地，有梦想有...</p>
          </div>
          <div class="selfimg" style="width:100%">
            <p style="margin:0;padding:0">
              <img
                style="width:40%; border-radius:10% "
                src="https://respic.wzq998.com//uploads/ads/20190815/6be65208b51179e5a481d84a04a2693f.jpg"
                alt
              />
              <img
                style="width:40%; border-radius:10%;margin-left:1% "
                src="https://respic.wzq998.com//uploads/ads/20190815/f661e05c0cba75dbcdbefef3029ebb2d.jpg"
                alt
              />
            </p>
          </div>
        </div>

        <div style="float:left;width:50%">
          <div class="selfxia1">
            <p
              style="padding-left: 0.26666667rem;font-size: 0.74666667rem;color: #5d5d5d;padding:0;margin:0;margin-top:1%;"
            >蜂蜜</p>
            <p
              style="font-size: 0.64rem;color: #5d5d5d;padding: 0.16rem 0 0.16rem 0.26666667rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding:0;margin:0;margin-top:1%"
            >要想皮肤好，蜂蜜少不了</p>
          </div>
          <div class="selfimg" style="width:100%">
            <p style="margin:0;padding:0">
              <img
                style="width:40%; border-radius:10% "
                src="https://respic.wzq998.com//uploads/ads/20190912/15dd891d34d1c7db376cefb91e60fa86.jpg"
                alt
              />
              <img
                style="width:40%; border-radius:10%;margin-left:1% "
                src="https://respic.wzq998.com//uploads/ads/20190912/4b471e67998ac39f649dd5eae5448430.jpg"
                alt
              />
            </p>
          </div>
        </div>
        <div style="float:left;width:50%">
          <div class="selfxia1">
            <p
              style="padding-left: 0.26666667rem;font-size: 0.74666667rem;color: #5d5d5d;padding:0;margin:0;margin-top:1%;"
            >花茶</p>
            <p
              style="width:100%;font-size: 0.64rem;color: #5d5d5d;padding: 0.16rem 0 0.16rem 0.26666667rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding:0;margin:0;margin-top:1%"
            >食于自然，美出新高度...</p>
          </div>
          <div class="selfimg" style="width:100%">
            <p style="margin:0;padding:0">
              <img
                style="width:40%; border-radius:10% "
                src="https://respic.wzq998.com//uploads/ads/20190911/72ff437ca9949cc3f17ba4a908e6c25f.jpg"
                alt
              />
              <img
                style="width:40%; border-radius:10%;margin-left:1% "
                src="https://respic.wzq998.com//uploads/ads/20190912/2f157578c9a0b984d98a54b4759fa7b3.jpg"
                alt
              />
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 数据 -->

    <div class="list">
      <p
        style="position: relative;width: 100%;padding: 0.8rem 0;margin-left:0.3rem;font-size: 0.85333333rem;font-family: PingFang SC;margin-bottom: 1px;"
      >猜你喜欢</p>

      <div class="listshow" style="width:100%;overflow:hidden">

        <!-- 下面这一段 -->
        <div class="shopin" 
        style="width:50%;display: block;position: relative;float: left;" 
        v-for="item in datalist" :key="item.id">
          <p style="position: relative;width: 98%;left: 0;height: 9.6rem;overflow: hidden;margin:0;padding:0">
            <img style="-webkit-border-radius: 5px;display: block;position: relative;width: 100%;height:100%" :src="item.thumb" alt="">
          </p>
          <p style="margin:0;padding:0;position: relative;font-size: 0.74666667rem;color: #5d5d5d;width: 93.88%;padding: 0.26666667rem 0;margin: 0 auto;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
            {{item.name}}
          </p>
          <p style="position: relative;width: 93.88%;margin: 0.56rem auto;color: #fa6969;font-size: 0.74666667rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
           {{item.sell_price}}
          </p>
        </div>






        
      </div>
      





      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      datalist:[],
      lbt: [
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190823/b6e449a7d3d07cebb09a9f842c46dd33.png"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190912/ba687e24c444af80cd6b9aae9ab8c15e.png"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190912/7c0c60c16a0ae2014a0ed50b93ad5192.png"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190814/5fbc5ba49338bf424cd13c390b7de442.png"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190814/63bd7d42d859cb3641cc2d5cf23e585f.png"
        }
      ],
      riesa: [
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190422/2eba2d0237599ed01c08b985264c2978.png",
          name: "积分商城",
          id: "1"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190422/061e8a6a4e3a6f51c4302080d48dc0f7.png",
          name: "赶马之宝",
          id: "2"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190422/558f14009e05b8a382d5930e9e108493.png",
          name: "新品上架",
          id: "3"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190422/150c9843b6b4b83c5826851e77f7e56b.png",
          name: "领卷中心",
          id: "4"
        },
        {
          img:
            "https://respic.wzq998.com//uploads/ads/20190924/de7bcfbd5d6b39618407e5f78def6131.png",
          name: "赶马农场",
          id: "5"
        }
      ]
    };
  },

  async created() {
    // 发起ajax请求
    let sessionId = "";
    let recId = "";
    let {data} = await this.$axios.get(
      "https://api.wzq998.com/api/index/guess?token=&mac_no=&page=2&pageSize=90"
    );
    let listshopomg = data.data.list;
    // console.log(listshopomg)
   this.datalist = listshopomg.map(item=>{
     return item
   })
    console.log(this.datalist);
  }
};
</script>

<style scoped lang="scss">
#box {
  background: #efefef;

  margin-bottom: 60px;
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

//轮播图下
.riesa {
  width: 95%;
  height: 4.90666667rem;
  margin: 0 auto 0.62rem auto;
  background: white;
  display: flex;
  justify-content: space-around;
  .p1 {
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 0.64rem;
    margin-top: 0.26666667rem;
    color: #5d5d5d;
  }
  img {
    width: 2.13333333rem;
    margin: 0 auto;
    height: 2.13333333rem;
    margin: auto;
  }
}

//super
.super {
  width: 97.3%;
  margin: 0 auto 0.62rem auto;
  background: white;
  .superimg {
    width: 100%;
    min-height: 7.73333333rem;
    img {
      display: block;
      width: 100%;
      left: 0;
      top: 0;
    }
  }
  .row {
    display: flex;
    img {
      display: block;
      width: 100%;
    }
    .rowp1 {
      width: 93%;
      min-height: 8.26666667rem;
      max-height: 9.33333333rem;
      margin: 0 auto;
      overflow: hidden;
    }
  }
}

.self {
  width: 97.3%;
  margin: 0 auto 0.62rem auto;
  .selfp1 {
    width: 100%;
    padding: 0.64rem 0rem;
    // margin-left: 0.3rem;
    margin-bottom: 1px;
    background: white;
    font-size: 0.85333333rem;
  }
  .selfxia {
    // margin-left: 0.3rem;
    background: white;
    width: 100%;
    padding-bottom: 0.26666667rem;
    min-height: 13.33333333rem;
    max-height: 16rem;
    .selfxia1 {
      display: block;
      position: relative;
      float: left;
    }
  }
}

//数据
.list {
  width: 97.3%;
  margin: 0 auto 0.62rem auto;
  background: white;
  .listshow {
    position: relative;
  }
}
</style>