<template>
  <div>
    <div class="brand-all">
      <div class="back">
        <img
          mode="widthFix"
          src="https://respic.wzq998.com//uploads/brand/20190722/eaf4332b1573c3b530923c3319a7983a.jpg"
          class="img"
        />
      </div>
      <div class="award">
        <div class="ph-nav">
          <i class="el-icon-arrow-left" @click="goto('/classify')"></i>
          <em class="share-mark">
            <i class="el-icon-paperclip"></i>分享
          </em>
        </div>
        <div class="row head">
          <div class="row-left">
            <img
              mode="widthFix"
              src="https://respic.wzq998.com//uploads/brand/20190625/d6c4db7d762b5599892a9ac89756bfd5.jpg"
              class="img"
            />
          </div>
          <div class="row-right row">
            <div class="left">
              <p class="p1">王子清</p>
              <p class="p2">+ 收藏品牌</p>
            </div>
            <p class="right">品牌授权</p>
          </div>
        </div>
        <div class="center">
          <div class="content">
            <i class="i">品牌简介：</i> 赶马商城自有品牌，目前产品已经涉及零食糕点，花茶，果茶饮品，米面粮油，蜂蜜，果干，五谷杂粮等云南特色食品，以“赶马商城，敬天重地，经营有梦想有信仰的健康食品”为产品理念。我们的幸福，就是让种的人小康，让用的人健康！
          </div>
        </div>
        <div class="brand-list">
          <div id="rank_list" class="row">
            <p class="row-left in_" style="margin-right: 60px;" @click="zong" ref="a">综合</p>
            <p class="row-left" style="margin-right: 60px;" @click="xiao" ref="b">销量</p>
            <p class="row-left" style="margin-right: 60px;" @click="zuixin" ref="c">最新</p>
            <p class="row-right">
              <i class="i" @click="stoew" ref="d">价格</i>
              <i class="el-icon-upload2"></i>
            </p>
          </div>
          <div scroll-y="true" class="gds_list">
            <div
              class="product row"
              style="width:100%;position:relative"
              v-for="item in menus"
              :key="item.id"
            >
              <div class="good-item row" @click="gotofromcart(item.id)">
                <div class="row-left">
                  <img mode="widthFix" :src="item.thumb" class="img" />
                </div>
                <div class="row-right">
                  <p class="p1">{{item.name}}</p>
                  <div class="p2 row">
                    <i class="i" style="color:red">￥</i>
                    <b class="b" style="color:red">{{item.markets_price}}</b>
                    <b
                      class="right"
                      style="position: relative; float: right; font-size: 0.64rem; padding: 0.21rem 0.42rem; color: white; background: rgb(15, 202, 157); border-radius: 15px;"
                    >立即购买</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: "",
      num: true
    };
  },
  async created() {
    let { id } = this.$route.params;

    let data = await this.$axios.get("http://106.53.2.52:5200/goods/select", {
      params: {
        brand_id: id
      }
    });

    this.menus = data.data;
     console.log(this.menus);
  },
  methods: {
    gotofromcart(id){
      this.$router.push('/details/'+id)
console.log(id)
    },
    goto(path) {
      this.$router.push(path);
    },

    async stoew() {
      if (this.num == true) {
        let { id } = this.$route.params;

        let data = await this.$axios.get("http://106.53.2.52:5200/goods/sel", {
          params: {
            brand_id: id
          }
        });

        this.menus = data.data;
        this.num = false;
  
      } else {
        let { id } = this.$route.params;
   
        let data = await this.$axios.get("http://106.53.2.52:5200/goods/sels", {
          params: {
            brand_id: id
          }
        });
        this.menus = data.data;
        this.num = true;
        

      }
       this.$refs.a.classList.remove("in_");
      this.$refs.b.classList.remove("in_");
      this.$refs.c.classList.remove("in_");
      this.$refs.d.classList.add("in_");
    },
    async zuixin() {
      let { id } = this.$route.params;

      let data = await this.$axios.get("http://106.53.2.52:5200/goods/selss", {
        params: {
          brand_id: id
        }
      });

      this.menus = data.data;
      this.$refs.a.classList.remove("in_");
      this.$refs.b.classList.remove("in_");
      this.$refs.d.classList.remove("in_");
      this.$refs.c.classList.add("in_");
    
    },
    async xiao() {
      let { id } = this.$route.params;
  
      let data = await this.$axios.get("http://106.53.2.52:5200/goods/selsss", {
        params: {
          brand_id: id
        }
      });

      this.menus = data.data;
      this.$refs.a.classList.remove("in_");
      this.$refs.c.classList.remove("in_");
      this.$refs.d.classList.remove("in_");
      this.$refs.b.classList.add("in_");
    },
    async zong() {
      let { id } = this.$route.params;

      let data = await this.$axios.get("http://106.53.2.52:5200/goods/select", {
        params: {
          brand_id: id
        }
      });

      this.menus = data.data;
 
             this.$refs.d.classList.remove("in_");
      this.$refs.b.classList.remove("in_");
      this.$refs.c.classList.remove("in_");
      this.$refs.a.classList.add("in_");
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row::after {
  content: "";
  display: block;
  clear: both;
}
.brand-all {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #efefef;
  .back {
    position: absolute;
    width: 100%;
    z-index: 50;
    top: 0;
    left: 0;
    .img {
      position: relative;
      width: 100%;
    }
  }
  .award {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 150;
    .ph-nav {
      position: relative;
      font-size: 1.05333333rem;
      padding: 0.64rem 1.06666667rem;
      text-align: center;
      font-weight: 500;
      background: transparent;
      overflow: hidden;
      .el-icon-arrow-left {
        position: relative;
        display: block;
        float: left;
        top: 0.10666667rem;
        color: white;
      }
      .share-mark {
        position: relative;
        display: block;
        float: right;
        margin-left: 0.64rem;
        color: white;
        font-style: normal;
      }
    }
    .row {
      position: relative;
    }
    .head {
      padding-bottom: 0.26666667rem;
      margin-top: 0.26666667rem;
      height: 5.33333333rem;
      .row-left {
        float: left;
        width: 20%;
        padding-left: 0.53333333rem;
        img {
          width: 2.66666667rem;
          height: 2.66666667rem;
          border-radius: 50%;
        }
      }
      .row-right {
        float: right;
        width: 77%;
        padding-top: 0.8rem;
        .left {
          float: left;
          .p1 {
            position: relative;
            font-size: 16px;
            color: white;
          }
          .p2 {
            position: relative;
            display: inline-block;
            padding: 0.26666667rem 0.42666667rem;
            margin: 0.8rem 0;
            color: white;
            background: #fbb152;
            font-size: 14px;
            border-radius: 15px;
          }
        }
        .right {
          float: right;
          background: white;
          color: #0fca9d;
          font-size: 14px;
          text-align: center;
          padding: 0.21333333rem 0.42666667rem;
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }
      }
    }
    .center {
      position: relative;
      width: 83.66%;
      margin: 0 auto;
      background: white;
      font-size: 0.84666667rem;
      color: #6e6e6e;
      padding: 0.53333333rem;
      -webkit-box-shadow: 0 2px 5px grey;
      box-shadow: 0 2px 5px grey;
      border-radius: 10px;
      .content {
        position: relative;
      }
    }
    .brand-list {
      position: relative;
      padding-top: 0.53333333rem;
      #rank_list {
        width: 100%;
        padding: 0.53333333rem 1.06666667rem;
        background: white;
        .in_ {
          color: #0fca9d;
        }
        .row-left {
          display: block;
          position: relative;
          float: left;
          font-size: 0.84666667rem;
        }
        .row-right {
          display: block;
          position: relative;
          float: left;
          margin-top: -0.10666667rem;
          margin-left: 30px;
          i {
            font-size: 0.84666667rem;
            position: relative;
            display: inline-block;
            margin-right: 3px;
            font-style: normal;
          }
        }
      }
      .gds_list {
        position: relative;
        overflow-y: scroll;
        background: white;
        height: 365px;
        .product {
          .good-item {
            padding: 0.37rem 0.53rem;
            position: relative;
            height: 7.86rem;
            .row-left {
              position: relative;
              float: left;
              width: 30.98%;
              overflow: hidden;
              border-radius: 3px;
              .img {
                width: 100%;
              }
            }
            .row-right {
              position: relative;
              float: right;
              width: 69%;
              padding-left: 0.8rem;
              height: 100%;
              .p1 {
                position: relative;
                font-size: 0.84666667rem;
                // max-height: 2.02666667rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .p2 {
                position: absolute;
                padding-left: 0.8rem;
                left: 0;
                bottom: 0;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>