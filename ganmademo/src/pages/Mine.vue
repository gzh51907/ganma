<template>
    <div>
        <div class="con">
            <div class="header">
                <el-image style="width: 100%" src="https://api.wzq998.com/Forestproducts/public/static/api/img/self_back.png" class="h_bj"></el-image>
               
                    <i class="el-icon-setting" ></i>
                <div>
                    <el-image src="https://api.wzq998.com/Forestproducts/public/static/api/img/self_head.png" alt="" class="tx"></el-image>
               
                    <p class="login_reg">
                  
                        <span>登录</span>
                        <span>/</span>
                        <span>注册</span>
                    </p>
                 </div>
            
                    <ul class="datalist1">
                        <li  v-for="item in datalist1" :key="item.ico" >
                            <i v-bind:class="item.ico"></i>
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
          
                <div class="main1">
                    <p class="main1_top">
                        <span class="main1_top_span1">我的订单</span>
                        <span class="main1_top_span2">查看全部订单></span>
                    </p>
                        
                    <ul class="main1_datalist2">
                        <li v-for="item in datalist2" :key="item.name">
                            <p class="datalist2_img">
                                <img :src="item.img" alt="">
                            </p>
                            <p class="datalist2_name">{{item.name}}</p>
                        </li>
                    </ul>
                </div>
                <div class="datalist3">
                    <ul class="datalist3_ul">
                        <li v-for="item in datalist3" :key="item.name">
                            <img :src="item.img" alt="" class="datalist3_ul_img">
                            <span class="datalist3_ul_name">{{item.name}}</span>
                            <span class="datalist3_ul_jiantou">></span>
                        </li>
                    </ul>
                </div>
                <div class="datalist4">
                    <ul class="datalist4_ul">
                        <li v-for="item in datalist4" :key="item.name">
                            <img :src="item.img" alt="" class="datalist4_ul_img">
                            <span class="datalist4_ul_name">{{item.name}}</span>
                            <span class="datalist4_ul_jiantou">></span>
                        </li>
                    </ul>
                </div>
                <div class="footer">
                    <p class="footer_top">
                        技术支持:云南金猴网络科技有限公司   法律顾问:云南硕欣律师事务所
                    </p>
                    <p class="footer_bottom">
                        <span class="footer_b_span1">ICP:滇B2-20160013</span>
                        <span class="footer_b_span2">滇公网安备53010202000259号</span>
                        <span class="footer_b_span3">滇ICP备13002773号-1</span>
                    </p>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           datalist1 : [

               {
                ico : 'el-icon-date',
                name : '签到'
               },
               {
                ico : 'el-icon-star-off',
                name :' 收藏(0)'
              },{
                  ico : 'el-icon-postcard',
                  name : '优惠券' 
              }
           ],
           datalist2 : [
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_pay.png',
                   name : '代付款'
               },
                {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_share.png',
                   name : '待分享'
               },
                {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_send.png',
                   name : '待发货'
               },
                {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_accept.png',
                   name : '待收货'
               },
                {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_comment.png',
                   name : '待评价'
               }
           ],
           datalist3 : [
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_mystore.png',
                   name : '我的店铺'
               },
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_hisstore.png',
                   name : 'TA的店铺'
               },
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_integral.png',
                   name : '积分商店'
               },
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_backpay.png',
                   name : '退款售后'
               }
           ],
           datalist4 : [
                {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_server.png',
                   name : '客服中心'
               },
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_app.png',
                   name : '下载APP'
               },
               {
                   img : 'https://api.wzq998.com/Forestproducts/public/static/api/img/self_about.png',
                   name : '关于我们'
               }
           ]
        }
    }
}
</script>

<style lang="scss" scoped>
 ul,li{
    list-style: none;
 }
body,html{
    width: 100%;
    height: 100%;
    font-size:  26.67vw;;
}
 .con{
     height: 700px;
     width: 100%;
      background: #ddd;
    //  background: #ddd6;
     .header {
     position: relative;
     width: 100%;
    .h_img{
         width: 100%;
         height: 10rem;
         background-image: url("https://api.wzq998.com/Forestproducts/public/static/api/img/self_back.png");
         background-repeat: no-repeat;
         background-size: 100% 100%;
         margin-top: 0px;
     }

    .el-icon-setting{
        display: block;  
        font-size: 1.4rem;
        color: white;
        position: absolute;
        top: 30px;
        right:15px;
        font-weight: 400;
    }
     
     
     .tx{
        //  width: 2.666667rem;
        //  height: 2.666667rem;
         position: absolute;
         top: 42%;
         left: 50%;
         transform: translate(-50%,-50%);
     }
     .login_reg{
         position: absolute;
         top: 56%;
         left: 50%;
         transform: translate(-50%,-50%);
         color: #fff;
     }
     .datalist1{
         width: 94%;
         height: 2.4rem;
         background: #fff;
         border-radius: 5px;
         position: absolute;
         bottom: -0.106667rem;
         display: flex;
         justify-content: space-around;
         align-items: center;
         
         margin: 0rem;
         padding: 0px;
         margin-left: 0.7rem;
         li{
            //  line-height: 40px;
            //  margin-left: 56px;
             font-size: 14px;
            //  float: left;
            // background: #000;
            //  span{
            //     //  margin-left: 5px;
            //  }
         }
        //  li:first-child{
        //     //  margin-left: -10px;
        //  }
     }
     .main1{
         width: 94%;
         height:6.5rem;
         position: absolute;
        //  left: 10px;
         bottom: -6.966667rem;
         background: #fff;
         display: flex;
         flex-direction: column;
         margin-left: .7rem;
        //  padding: 0px;
        //  margin: 0px;
         .main1_top{
             width: 100%;
             font-size: 13px;
             color : #333;
             display: flex;
             background: #fff;
             justify-content: space-between;
             margin: 0px;
             height: 1.8rem;
             align-items: center;
             .main1_top_span1{
                margin-left: .333333rem;
             }
             .main1_top_span2{
                margin-right: .333333rem;
             }
             
         }
         .main1_datalist2{
             width: 100%;
             flex: 1;
             background:#fff;
             display: flex;
             margin: 0px;
             padding: 0px;
             justify-content: space-around;
             align-items: center;
             li{
                 width: 2.83333rem;
                 height:4.366667rem;
                font-size: 10px;
                color : #333;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .datalist2_img{
                    width: 2.066667rem;
                    height: 1.166667rem;
                }
                .datalist2_name{
                    height: .533333rem;
                    // margin-top: 20px;
                    font-size: 0.8rem;
                }
             }
         }
     }
     .datalist3{
         width: 94%;
         position: absolute;
         left: .7rem;
         bottom: -17.5rem;
         background: #fff;
         margin: 0px;
         padding:0px;
         .datalist3_ul{
              width: 100%;
              position: relative;
              height: 10.2rem;
              margin: 0px;
              padding:0px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
             li{          
                // background: #000;
                margin-bottom: .9rem;
                width: 100%;
                position: relative;
                 display: flex;
                // flex-direction: column;
                // justify-content: center;
                align-items: center;
                img{
                    width: 1.566667rem;
                    height: 1.566667rem;
                    margin-left: .8rem;
                }
                .datalist3_ul_name{
                    font-size: 0.9rem;
                    color: #000;
                    // position: absolute;
                    // top: 4px;
                    margin-left: .7rem;
                }
                .datalist3_ul_jiantou{
                    font-size: 1.2rem;
                    color: #000;
                    font-weight: bold;
                    position: absolute;
                    right: 0.9rem;
                }
             }
             li:first-child{
                 margin-top: .133333rem;
             }
         }
     }
     
      .datalist4{
         width: 94%;
         position: absolute;
         left: .7rem;
         bottom: -25.9rem;
         background: #fff;
         margin: 0px;
         padding:0px;
         .datalist4_ul{
              width: 100%;
              position: relative;
              height: 8.0rem;
              margin: 0px;
              padding:0px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
             li{          
                // background: #000;
                margin-bottom: .9rem;
                width: 100%;
                position: relative;
                 display: flex;
                // flex-direction: column;
                // justify-content: center;
                align-items: center;
                img{
                    width: 1.566667rem;
                    height: 1.566667rem;
                    margin-left: .8rem;
                }
                .datalist4_ul_name{
                    font-size: 0.9rem;
                    color: #000;
                    // position: absolute;
                    // top: 4px;
                    margin-left: .7rem;
                }
                .datalist4_ul_jiantou{
                    font-size: 1.2rem;
                    color: #000;
                    font-weight: bold;
                    position: absolute;
                    right: 0.9rem;
                }
             }
             li:first-child{
                 margin-top: .133333rem;
             }
         }
     }
     .footer{
         position: absolute;
         left: 0.7rem;
         bottom: -28.4rem;
        //  background: #58c;
         height: 2rem;
         width: 94%;
        //  background: #fff;
         display: flex;
         flex-direction: column;
         padding: 0px;
         margin: 0px;
         justify-content: center;
         align-items: center;
        
         .footer_top{
             color: #cdcdcd;
             font-size: 0.7rem;
             margin-left:0.7rem;
            //  line-height: 0.7rem;
             padding: 0px;
             margin: 0px;
             height: 1.1rem;
            
         }
         .footer_bottom{
             flex: 1;
             color: #ccc;
             font-size: 0.6rem;
            //  line-height:  0.6rem;;
             padding: 0px;
             margin: 0px;
             span{
                 margin-left: 0.8rem;
             }
             span:first-child{
                 margin-left: 0px;
             }
         }
     }
 }
 }
 
</style>