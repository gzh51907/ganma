<template>
  <div id="cartbox">
    <div class="head">
      购物车
      <span class="heads1">编辑</span>
    </div>

    <div class="cartcont">
      <div class="cartconthead">
        <div class="rowcont">
          <div class="rechek">
            <input type="checkbox" name id class="reselft" />
          </div>
          <p class="el-icon-s-goods" style="font-size: 1.06666667rem;margin-right: 5px;float:left"></p>
          <span
            style="display: block;float: left;position: relative;font-size: 0.74666667rem;padding-bottom: 3px;"
          >赶马商城</span>
        </div>

        <div class="cartbottom" v-for="(item,index) in cartlist" :key="index">
          <div style=" width: 14.66%; padding-top: 2rem;">
            <input
              type="checkbox"
          
              name
              id
              class="cartbottomcheck"
              v-model="item.check"
            />
          </div>
          <img
            :src="item.img"
            alt
            style="width: 26.66%; min-height: 5.2rem;margin-left:13%;margin-top:-9%"
          />
          <div style="width: 50%; padding: 0 1.05rem 0 0.57rem; height: 5.26rem;float:right">
            <p class="p01">{{item.name}}</p>
            <div class="lastone">
              <p class="lastprice">￥{{item.price}}</p>
              <div class="lastremove">
                <div
                  style="    position: relative;float: left;width: 28%;font-size: 0.64rem;text-align: center;padding: 2px 0;"
                  @click="jian(item.id)"
                >-</div>
                <div
                  style="position: relative;width: 40%;top: 0;font-weight: 500;font-size: 0.64rem;border-left: 1px solid #cdcdcd;border-right: 1px solid #cdcdcd;float: left;text-align: center;padding: 2px 0;"
                >{{item.num}}</div>
                <div
                  style="    position: relative;width:28%;font-size: 0.64rem;text-align: center;padding: 2px 0;float:left"
                  @click="jia(item.id)"
                >+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cartfooter">
        <div style="    float: left;">
          <input type="checkbox" name id class="footcheck" v-model="quanxuan" @click="checkno" />
          <label
            for
            style="display: block;position: relative;float: left;font-size: 0.74666667rem;margin-left: 5px;margin-top: 0.5rem;color: #6e6e6e;"
          >全选</label>
        </div>
        <p
          style="font-size: 0.85333333rem;
    margin-left:38%;
    padding-top: 0.5rem;float: left;"
        >
          总价:
          <span
            style="display: inline;
    font-size: 0.85333333rem;
    color: #fa6969;"
          >{{totalPrice.toFixed(2)}}</span>
        </p>
        <p id="footerp1" @click="goto('/Order')">结算</p>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  totalprice: 0,

  data() {
    return {
      u: [],
      quanxuan: false
    };
  },
  async created() {
    //  if(this.$router)
    //  if(this.$router.history.current.name=='cart'){

    //  }
    this.$store.state.cart.cartlist = [];
    let username = this.$store.state.common.user.username;
    let data = await this.$axios.get("http://106.53.2.52:5200/goods/cartpeople", {
      params: {
        username: username
      }
    });
    data.data.forEach(async item => {
      let sho = item.id;

      let data1 = await this.$axios.get("http://106.53.2.52:5200/goods/ll", {
        params: {
          id: sho
        }
      });

      data1.data.forEach(item => {
        let id = item.id;
        let goods = {
          id,
          price: item.sell_price,
          name: item.name,
          img: item.thumb,
          num: 1,
          check: false
        };

        // console.log(this.$store);
        this.$store.commit("add2cart", goods);
      });
    });
  },
  // beforeMount(){this.$router.go(0)},
  computed: {
    cartlist() {
      return this.$store.state.cart.cartlist;
    },
    totalPrice() {
      this.$store.state.cart.cartlist.forEach(item => {
        if (item.check == true) {
          this.u.push(item.id + "");
        }
      });
      // console.log('11:',this.u)
      return this.$store.getters.totalPrice;
    }
  },
  methods: {
    checkno() {
        this.quanxuan=!this.quanxuan
 
      this.$store.state.cart.cartlist.forEach(item => {
        
          item.check =this.quanxuan
          
      });
    },
    jia(id) {
      this.$store.commit("jia", id);
    },
    jian(id) {
      this.$store.commit("jian", id);
    },

    goto(path) {
      let ap = this.u;
      // this.$store .state.cart.cartlist.forEach(item=>{
      //   if(item.check==true){
      //   //   let u=[];
      //   //   console.log(item.id)
      //   // u.push(item.id)
      //   //   console.log(u)
      //     // this.$router.push({name:'order',params:{u}})
      //   }
      // })
      // console.log(ap)
      this.$router.push({ name: "order", params: { ap } });
    }
  }
};
</script>


<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#footerp1 {
  float: right;
  margin-left: 3%;
  font-size: 0.85333333rem;
  color: white;
  width: 4.26666667rem;
  background: #fa6969;
  text-align: center;
  padding: 0.16rem 0;
  border-radius: 0.26666667rem;
  margin-right: 2.53333333rem;
}
.cartfooter {
  position: fixed;
  width: 100%;
  bottom: 2.82666667rem;
  left: 0;
  padding: 0.10666667rem 0 0.10666667rem 1.06666667rem;
  background: white;
  border-top: 1px solid #eee9e7;
  z-index: 1567;
  .footcheck {
    display: block;
    position: relative;
    float: left;
    width: 0.8rem;
    height: 0.8rem;
    font-size: 0.64rem;
    color: white;
    line-height: 0.8rem;
    font-weight: 400;
    text-align: center;
    margin-top: 0.62rem;
  }
}
.lastone {
  display: block;
  margin-top: 6%;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0 1.05rem 0 0.57rem;
  .lastremove {
    width: 3.9rem;
    border: 1px solid black;
    padding: 0.1rem;
    font-size: 0.85333333rem;

    text-align: center;
    float: right;
  }
  .lastprice {
    font-size: 0.74666667rem;
    color: #fa6969;
    padding-top: 0.32rem;
    float: left;
  }
}
.p01 {
  position: relative;
  font-size: 0.74666667rem;
  font-weight: 600;
  max-height: 1.86666667rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.cartbottom {
  padding-bottom: 0.5rem;
  .cartbottomcheck {
    display: block;
    position: relative;
    width: 0.8rem;
    height: 0.8rem;
    font-size: 0.64rem;
    border: 1px solid darkgray;
    text-align: center;
    line-height: 0.8rem;
    margin: 0.39rem auto;
    color: white;
    background: white;
  }
}
.cartcont {
  position: relative;
  width: 100%;
  left: 0;
  margin-top: 0.52rem;
  z-index: 100;
  .cartconthead {
    position: relative;
    width: 100%;
    z-index: 100;
    padding-bottom: 6.4rem;
    overflow-y: scroll;
    overflow-x: hidden;
    .rowcont {
      position: relative;
      padding: 0.36rem 0;
      .rechek {
        width: 14.66%;
        float: left;
        .reselft {
          display: block;
          position: relative;
          width: 0.8rem;
          height: 0.8rem;
          font-size: 0.64rem;
          border: 1px solid darkgray;
          line-height: 0.8rem;
          text-align: center;
          margin: 2px auto 0 auto;
          font-weight: 400;
          color: white;
          background: white;
        }
      }
    }
  }
}
.head {
  position: relative;
  font-size: 0.85333333rem;
  padding: 0.73rem 0;
  color: black;
  text-align: center;
  background: white;
  z-index: 180;
  .heads1 {
    display: block;
    position: absolute;
    top: 0.73rem;
    right: 5.3%;
    font-size: 0.74666667rem;
    color: #0fca9d;
    padding: 0;
  }
}
</style>