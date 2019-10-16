<template>
  <div id="app">
    <div class="sub-all" >
      <div class="title_component" style="background:white">
        <div class="order-title clear">
          <i class="el-icon-back" @click="nomo('/cart')"></i>
          <p class="center-word">确认订单</p>
        </div>
      </div>
      <div class="address">
        <div class="addr-content">
          <div class="row clear">
            <p class="el-icon-user fl"></p>
            <p class="fl">收货人：{{this.$store.state.common.user.username}}</p>
            <p class="fr">13694859157</p>
          </div>
          <div class="row2 clear">
            <p class="el-icon-location-outline fl"></p>
            <p class="row-right fr">收货地址：北京市,北京市,东城区,建国门街道办事处,北京</p>
          </div>
        </div>
      </div>
      <img
        mode="widthFix"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAADCAYAAABoBE+dAAABpElEQVRYR+2XsWtTURjFf+e9CKWY/AUKUujUUYhTwS4+dyFQOoqhg3To2qHt0LVD6SARRykE/APiUsXJgKNTpAj6FyQSAul7R6yLIu29vogd8t56z/3OO9+5l3s+eZC9xSSU/cSUlF0t9d7Flmj0Oxsibdsuw2vEq+HnxjGtVh7D6UG2QqJDci/G4K/EVHqDLfzv/p5lq+TsY24Efy4ESDWm8LaWex9D0Iv1bjdt3Bk+xTwCFLXnF5CkwuSdYbP9MnavK72xrfoTNy/+ikL+9HAK1Ep2a4LZ4evkSGtvzoM1bDX6L9YlPQPqQfwlAMPEZmc0/nLE2l6Q1z+eg7NsHc/GC1R6rzLtuvw9vV/j1sIW4gBYKHuugBHyJku9EwkH65zu1eqLt7ckDjQjr+3NYfPxCVKQ15XeoDWXAObJ33OVTu4JFwmaD71jtYhK0Df7nZVE6SHF7AlaMC3w7ujek+iJwYMHG6B2qUml0hu8UNfpr7uk3M1+Juji7xM0ogB3tPw6OkHX3z9fTdC++QcTQ6Jx4Xz7W7MdNTFUeoPH8XfAHPr7HThLd/WJDDx0AAAAAElFTkSuQmCC"
        class="linea"
      />
      <div class="store-item">
        <div class="stitle clear" style="padding:4.688px 9.375px;">
          <i class="el-icon-box fl"></i>
          <p class="fl">赶马仓库</p>
        </div>
        <div class="goods clear" v-for="item in cartding" :key="item.id">
          <p class="p fl">
            <img
              mode="widthFix"
              :src="item.img"
              class="img"
            />
          </p>
          <div class="info fl">
            <p class="price">
              <i class="i" style="font-style:normal;color:red;">￥</i>
              <b class="b" style="color:red">{{item.price}}</b>
              <em class="em" style="font-style:normal">x{{item.num}}</em>
            </p>
            <p class="name">{{item.name}}</p>
            <p class="p1">230克/袋</p>
          </div>
          <p style="    position: relative;width: 100%;clear: both;"></p>
          <p class="row">
            配送方式：
            <i class="i" style="font-style:normal;color:#cdcdcd">不包邮</i>
            <em class="fr" style="font-style:normal">￥8.00</em>
          </p>
        </div>
        <p class="user-message">
          <input placeholder="备注，选填" />
        </p>
        <p class="p2">
          共{{cartbottom}}件商品
          <i class="i1">小计：</i>
          <i class="i2">￥{{totalPrice}}</i>
        </p>
      </div>
      <div class="profit">
        <div class="pro-item clear">
          <p class="fl">
            优惠券：
            <i class="i"></i>
          </p>
          <p class="fr">
            -￥0.00
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>
      </div>
      <div class="result" style="margin-bottom:50px">
        <div class="clear" style="padding:6.536px 9.375px">
          <p class="fl">商品金额:</p>
          <p class="fr">￥{{totalPrice}}</p>
        </div>
        <div class="clear" style="padding:6.536px 9.375px">
          <p class="fl">运费:</p>
          <p class="fr">￥8.00</p>
        </div>
        <div class="clear" style="padding:6.536px 9.375px">
          <p class="fl">总金额:</p>
          <p class="fr">￥{{totalPrice+8}}</p>
        </div>
      </div>
      <div class="clear bt" style="z-index:8000">
        <div class="fl one">
          合计：
          <i class="i" style="color:red">￥{{totalPrice+8}}</i>
        </div>
        <div class="fr two" @click="goto('/last')">提交订单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  created(){
    console.log( this.$store.state.common.user.username)
    //  console.log(this.$route.params)

     this.$store.state.cart.cartding=[]
   
     let arr = this.$route.params.ap;
        for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i] == arr[j]){
                    arr.splice(j,1);
                    j--;
 
                }
 
            }
        }
        arr.forEach(ele => {
            this.$store.state.cart.cartlist.forEach(item=>{
            
              if(item.id==ele){
                  this.$store.commit("add1cart", item);
               
              }
            })
        });

   
  },computed:{ 
     totalPrice() {
   
      return this.$store.getters.totali;
    },
    cartding() {
      console.log(this.$store.state.cart.cartding)
      return this.$store.state.cart.cartding;
    },
    cartbottom(){
     return this.$store.getters.cartbottom;
    }
  },
  methods:{
    nomo(path){
      this.$router.push(path)
    },
    goto(path){
      let num = this.$store.getters.totali+8;
    
      this.$router.push({name:'last',params:{num}})
    }
  }

};
</script>

<style lang="scss" scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
* {
  margin: 0;
  padding: 0;
}
.clear::after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
#app,
body {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  .sub-all {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    padding-bottom: 50px;
    background: #efefef;
    .title_component {
      height: 42.15px;
      width: 100%;
      border-bottom: 1px solid #ccc;
      .order-title {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 41.25px;
        .el-icon-back {
          float: left;
          padding: 13px 0 0 13px;
        }
        .center-word {
          margin: 0;
          text-align: center;
        }
      }
    }
    .address {
      width: 100%;
      background: white;
      .addr-content {
        .row {
            padding: 24px 12px;
          .el-icon-user {
            color: aqua;
          }
        }
        .row2 {
             padding: 0 12px;
          .el-icon-location-outline {
            color: aqua;
          }
          .row-right {
            width: 95%;
            text-align: left;
          }
        }
      }
    }
    .linea {
      display: block;
      position: relative;
      width: 100%;
      max-height: 0.21333333rem;
    }
    .store-item {
      position: relative;
      width: 100%;
      background: white;
      margin: 4.688px 0;
      .goods {
        padding: 10px;
        .p {
          img {
            width: 88px;
            height: 88px;
          }
        }
        .info {
          width: 75%;
          height: 90px;
          position: relative;
          .price {
            .i {
              font-size: 20px;
            }
            .b {
              font-size: 20px;
            }
          }
          .name {
            white-space: nowrap;
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
          }
          .p1 {
            position: absolute;
            width: 100%;
            padding-left: 0.2rem;
            font-size: 16px;
            color: gray;
            left: 0;
            bottom: 0;
            white-space: nowrap;
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
          }
        }
        .row {
          padding: 0.75rem 0.5rem;
          margin: 10px 0;
        }
      }
      .user-message {
        width: 100%;
        input {
          border: none;
          outline: none;
          height: 25px;
          font-size: 16px;
        }
      }
      .p2 {
        text-align: right;
        i {
          font-style: normal;
        }
        .i1 {
          margin-left: 0.5rem;
        }
        .i2 {
          color: #fa6969;
        }
      }
    }
    .profit {
      background: white;
      .pro-item {
        padding: 6.536px 9.375px;
      }
    }
    .result {
      width: 100%;
      background: white;
      margin-top: 10px;
    }
    .bt {
      position: fixed;
      width: 100%;
      border-top: 1px solid #cdcdcd;
      background: white;
      left: 0;
      bottom: 0;
      height: 50px;
      line-height: 50px;
      z-index: 50;
      i {
        font-style: normal;
      }
      .two {
        text-align: center;
        color: white;
        background: #fa6969;
        width: 87px;
        height: 33px;
        line-height: 33px;
        text-align: center;
        margin: 10px 10px 0 0;
        border-radius: 30px;
      }
    }
  }
}
</style>