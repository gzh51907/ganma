<template>
  <div>
    <div id="class-head">
      <p class="p1">
        <input disabled="disabled" placeholder="输入商品名称" class="inp" />
        <i class="iconfont"></i>
      </p>
    </div>
    <div class="class-body">
      <div class="row-left" style="height: 590.4px;">
        <div
          class="ps"
          v-for="item in test"
          :key="item.id"
          @click="change(item.id)"
          v-bind:class="{active:item.id==currentIdx}"
        >
          <p class="p">{{item.name}}</p>
        </div>
      </div>
      <div class="row-right" v-for="item in test" :key="item.id" v-show="item.id==currentIdx" style="height: 590px; overflow-x: hidden;
    overflow-y: scroll;">
        <div>
          <div id="banner" v-for="lis in idx" :key="lis.id">
            <img :src="lis.thumb" alt />
          </div>
          <div class="class-item">
            <p class="title">{{item.name}}</p>
            <div class="products">
              <div class="el-w-3" v-for="item1 in imgurl" :key="item1.id" @click="goinlist(item1.id)">
                <div class="gs-item">
                  <div class="p">
                    <img :src="item1.thumb" alt />
                  </div>
                  <b class="b-words">{{item1.name}}</b>
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
  async created() {
    let data1 = await this.$axios.get(
      "https://api.wzq998.com/api/goods/category_v2?"
    );

    this.test = data1.data.data.list;
   


       let datas1 = await this.$axios.get(
        "https://api.wzq998.com/api/goods/category_v2?",
        {
          params: {
            parent_id: -1
          }
        }
      );
      this.idx=[datas1.data.data.banner];//banner图
     datas1.data.data.list.forEach(item => {
          this.imgurl=item.child;
        
      });
  },
  data() {
    return {
      currentIdx: -1,
      idx:'',
      imgurl:'',
      test: ""
    };
  },
  methods: {
    async change(id) {
      this.currentIdx = id;
   
      let datas1 = await this.$axios.get(
        "https://api.wzq998.com/api/goods/category_v2?",
        {
          params: {
            parent_id: id
          }
        }
      );
      this.idx=[datas1.data.data.banner];//banner图
     datas1.data.data.list.forEach(item => {
          this.imgurl=item.child;
        // console.log(this.imgurl)
      });
     
    },
    goinlist(id){
      this.$router.push({name:'lists',params:{id}})
    }
  }
};
</script>

<style lang="scss"  scoped>
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