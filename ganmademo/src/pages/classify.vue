<template>
  <div>
    <div id="class-head">
      <p class="p1">
        <input disabled="disabled" placeholder="输入商品名称" class="inp" />
        <i class="iconfont"></i>
      </p>
    </div>
    <div class="class-body">
      <div class="row-left" style="height: 478.4px;">
        <div
          class="ps"
          v-for="(item,idx) in datalist"
          :key="item.id"
          @click="change(idx)"
          v-bind:class="{active:idx==currentIdx}"
        >
          <p class="p">{{item.name}}</p>
        </div>
      </div>
      <div class="row-right" v-for="(item,idx) in datalist" :key="item.id" v-show="idx==currentIdx">
        <div id="banner">
          <img :src="item.modeimg" alt />
        </div>
        <div class="class-item">
          <p class="title">{{item.name}}</p>
          <div class="products">
            <div class="el-w-3" v-for="item1 in item.urls" :key="item1.id">
              <div class="gs-item">
                <div class="p">
                  <img :src="item1.imgurl" alt />
                </div>
                <b class="b-words">{{item1.names}}</b>
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
      currentIdx: 0,
      idx: "",
      datalist: [
        {
          id: "1",
          name: "品牌入驻",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190831/5ce4e31a8b7fbb34da93bd14c1e0b620.jpg",
          urls: [
            {
              id: "1",
              imgurl:
                "https://respic.wzq998.com//uploads/brand/20190625/d6c4db7d762b5599892a9ac89756bfd5.jpg",
              names: "王子清"
            },
            {
              id: "2",
              imgurl:
                "https://respic.wzq998.com//uploads/brand/20190625/558dd82661c16b28c768debaac530457.jpg",
              names: "鬼魅"
            },
            {
              id: "3",
              imgurl:
                "https://respic.wzq998.com//uploads/brand/20190625/0822ccbe53dbb39b9cd91e98cd25153a.jpg",
              names: "鬼害怕"
            },
            {
              id: "4",
              imgurl:
                "https://respic.wzq998.com//uploads/brand/20190722/035df7b6bee237048010fdc97525fdab.jpg",
              names: "民通"
            },
            {
              id: "5",
              imgurl:
                "https://respic.wzq998.com//uploads/brand/20190731/367dc4a8abf6fab6d86ab3181f86acbe.jpg",
              names: "石头花生"
            }
          ]
        },
        {
          id: "2",
          name: "助农致富",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190610/17fa9dd920c1e31a9778bb6956ccc6a9.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/brand/20190722/164efea93c6518549703a3b71eba406c.jpg",
              names: "独龙江小店"
            }
          ]
        },
        {
          id: "3",
          name: "食品饮料",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190722/b2adc6e890bd2224f5ee27ec7d22de33.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190724/8df5930731555d2d467f289fa1a4a29a.jpg",
              names: "虫草"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190706/b0019c0e7870954834d94b088bc277d8.jpg",
              names: "红枣"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190424/b25a37e952988706de070afa0135f3ee.jpg",
              names: "蜂蜜"
            }
          ]
        },
        {
          id: "4",
          name: "每日生鲜",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190610/7c747d78e1aec4866eb1bb8b4e0ff9bd.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190424/36df1b9e2bf3a8615b36968e5881da2c.jpg",
              names: "木瓜"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190807/8f95868a280a090c7e2281fdf81b7c53.jpg",
              names: "火龙果"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190807/50f6689ec7e0e83553cf0450f536011e.jpg",
              names: "青桔"
            }
          ]
        },
        {
          id: "5",
          name: "富硒专区",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190722/4cb17679e7e70170280283158cfa330d.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190618/8ea076db9175eb6ed983cdea66c28b99.jpg",
              names: "米"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190618/62a62237194c68566b96d9d9f4538a17.jpg",
              names: "面"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190617/354b98910402a5f08eafc929ca61e4a1.jpg",
              names: "粉条"
            }
          ]
        },
        {
          id: "6",
          name: "珠宝玉石",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190722/73c43ad0a6ef09c4271b0aab52cbbf81.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190725/80e981a7cba7c246c9bc9665d468feb3.jpg",
              names: "奇石"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190725/cd12048e4c1fb64ff6785d620b7aa650.jpg",
              names: "美玉"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190924/6e2cdeabd58bfb637f30887346617172.jpg",
              names: "南红"
            }
          ]
        },
        {
          id: "7",
          name: "美妆时尚",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190610/b65ebc5288c1756c1177996d1008e580.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/640ef30d596a76935b58a3075acdf0e3.jpg",
              names: "面膜"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/472a36441f22c2fcecfdf59d8cb76868.jpg",
              names: "口红"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/4eda54cfb34a6d953b225e92bed6a8b5.jpg",
              names: "粉底"
            }
          ]
        },
        {
          id: "8",
          name: "服饰箱包",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190722/0cbb23d745ffcd783859a2a82acd4176.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/90a814c02d0a24cc65153fcdc10f84c5.jpg",
              names: "外套"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/5ac3df9e9960a5eb2a258c55683f388b.jpg",
              names: "T恤"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/0109932e7edaa032d770a7c3f95ecc62.jpg",
              names: "西装"
            }
          ]
        },
        {
          id: "9",
          name: "母婴用品",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190919/4a1f145bfb7789173626f78283638488.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/00015dd0a08ecd6986aff125abf0a13c.jpg",
              names: "早教益智"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/b52a15de03cf113b519bdc017bf4540f.jpg",
              names: "布艺毛绒"
            }
          ]
        },
        {
          id: "10",
          name: "家居生活",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190722/848b72a7ea98983697ceda927ef28d6e.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20191008/6ee0d5e1279dae85da08a31f2fdedcf9.jpg",
              names: "纸"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/bf5a3c41f0d0b94ed45d8284739baef2.jpg",
              names: "清洁工具"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/9ab7cea679c12466d9da1bf6927ff199.jpg",
              names: "被子"
            }
          ]
        },
        {
          id: "11",
          name: "数码家电",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190831/ccd4a1e52158abf33682326d80447f30.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/a8ed2ef7e971861bae8a9cfda7ad38cc.jpg",
              names: "电风扇"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20191009/96a1efc5fec3bc43c291b52725798c6a.jpg",
              names: "净水器"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190628/21173da288367b422c69b0b67d855480.jpg",
              names: "电饭煲"
            }
          ]
        },
        {
          id: "12",
          name: "生活服务",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190722/979c4582f1075c20afd3c1e8ad4a1183.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190627/cb39349ae3453e231a2da67828fb7c52.jpg",
              names: "机票"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/8ccaae520399e7bbb3d7f99478d79f38.jpg",
              names: "话费充值"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190701/e4cf540241cdcb16e394e0884d136f01.jpg",
              names: "火车票"
            }
          ]
        },
        {
          id: "13",
          name: "宠物生活",
          modeimg:
            "https://respic.wzq998.com//uploads/ads/20190919/375c75c673a65b03e3175b58a81ef4ec.jpg",
          urls: [
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190907/8adea4fa05c9e217e42b9907e0db4385.jpg",
              names: "干粮"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190907/46048c408f775ab29d40c739fc04a7cf.jpg",
              names: "零食"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190907/d765302f0da5bd77af7540d0fa57ab4c.jpg",
              names: "玩具"
            },
            {
              imgurl:
                "https://respic.wzq998.com//uploads/goods/20190907/0898ed7a0dde1adc1eb874786fb9eb16.jpg",
              names: "衣物"
            }
          ]
        }
      ]
    };
  },
  methods: {
    change(idx) {
      this.currentIdx = idx;
    }
  }
};
</script>

<style lang="scss"  scoped>
p {
  margin: 0;
}
#class-head {
  position: relative;
  width: 100%;
  padding: 0.68rem 0;
  background: white;
  .p1 {
    position: relative;
    width: 49%;
    margin: 0 auto;
    border-bottom: 1px solid black;
    .inp {
      position: relative;
      width: 100%;
      font-size: 0.74666667rem;
      padding: 0.18rem 0 0.18rem 2rem;
      -webkit-appearance: none;
      background: white;
    }
    input {
      outline: none;
      border: none;
    }
    i {
      display: block;
      position: absolute;
      left: 0;
      top: 0.06rem;
      width: 1.12rem;
      height: 1.12rem;
      font-size: 1.06666667rem;
      border: none;
    }
  }
}

.class-body {
  width: 100%;
  background: #efefef;
  overflow: hidden;
  .row-left {
    width: 24%;
    overflow-x: hidden;
    overflow-y: scroll;
    background: white;
    float: left;
    color: #5d5d5d;
    .ps {
      position: relative;
      width: 100%;
      .p {
        position: relative;
        font-size: 0.85333333rem;
        font-weight: 500;
        width: 100%;
        padding: 0.8rem 0;
        text-align: center;
        border-left: none;
        // background: white;
      }
    }
    .active {
      color: #0fca9d !important;
      background: #efefef;
      border-left: 4px solid #0fca9d;
    }
  }
  .row-right {
    width: 76%;
    padding-bottom: 2.66666667rem;
    position: relative;
    float: right;
    background: #efefef;
    #banner {
      position: relative;
      width: 92.98%;
      height: 4.21333333rem;
      margin: 0 auto;
      img {
        position: relative;
        width: 100%;
      }
    }
    .class-item {
      .title {
        position: relative;
        font-size: 0.74666667rem;
        padding: 0.8rem;
      }
      .products {
        width: 96.5%;
        margin: 0 auto;
        .el-w-3 {
          text-align: center;
          font-size: 0.7rem;
          width: 33.3%;
          float: left;
          .gs-item {
            position: relative;
            width: 100%;
            height: 7.57333333rem;
            overflow: hidden;
            .p {
              position: relative;
              width: 93.5%;
              height: 5.31rem;
              overflow: hidden;
              margin: 0 auto;
              img {
                position: relative;
                width: 100%;
              }
            }
            .b-words {
              font-size: 14px;
              text-align: center;
              display: block;
              width: 100%;
              padding: 0.31rem 0 0.93rem 0;
            }
          }
        }
      }
    }
  }
}
.row {
  position: relative;
}
</style>