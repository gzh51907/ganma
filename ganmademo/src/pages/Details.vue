<template>
  <div>
    <div id="box">
      <!-- 头上商品详情 -->
      <div class="headtop">
        <i
          class="el-icon-arrow-left"
          style="position: relative;display: block;float: left;font-size: 0.85333333rem;top: 0.10666667rem;"
          @click="goto('/classify')"
        ></i>
        商品详情
        <i
          class="el-icon-shopping-cart-full"
          style="font-style: normal; -webkit-font-smoothing: antialiased;display: block;position: absolute;top: 0.8rem;font-size: 1.06666667rem;color: #0fca9d;right: 3.2rem;"
          :value="cartlength"
        >{{cartlength}}</i>
        <p
          class="el-icon-chat-dot-round"
          style="position: absolute;top: 0.74666667rem;right: 1.06666667rem;margin: 0;padding: 0;"
        ></p>
      </div>

      <!-- 商品评价详情 -->
      <div class="showname" v-for="item in datalist" :key="item.id">
        <div class="showtop">
          <div class="showcont" style="overflow:hidden; display: flex; justify-content: center">
            <p class="showcontp1" style="margin-left:10%">
              <span class="i1">商品</span>
            </p>
            <p class="showcontp1" style="margin-left:10%">
              <span class="i1">评价</span>
            </p>
            <p class="showcontp1" style="margin-left:10%">
              <span class="i1">详情</span>
            </p>
          </div>
        </div>
        <div style=" width: 100%;height: 100%;top: 0;left: 0;overflow: hidden;">
          <div class="showimg">
            <img :src="item.thumb" alt style="float: left;width: 375px;" />
            <!-- <img src="https://respic.wzq998.com//uploads/goods/20191008/3dfcc4d622c6932e191884c9d6d5230e.jpg" alt="" style="float: left;    width: 375px;">
            <img src="https://respic.wzq998.com//uploads/goods/20191008/3dfcc4d622c6932e191884c9d6d5230e.jpg" alt="" style="float: left;    width: 375px;">-->
          </div>
        </div>

        <div class="knock">
          <div
            class="knock1"
            style=" background: rgb(255, 100, 69);width: 65%;padding-left: 0.533333rem;height: 3.46667rem;padding-top: 0.426667rem;display: inline-block;float: left;"
          >
            <p style="position: relative;color: white;margin-top: 0.53333333rem;">
              <span style="    display: inline-block;font-size: 14px;color: white;">￥</span>
              <b
                style="    display: inline-block;font-size: 18px; color: white;"
              >{{item.sell_price}}</b>
              <del
                style="display: inline-block;font-size: 14px;padding-left: 4px;color: white;text-decoration: line-through;"
              >原价:￥{{item.markets_price}}</del>
            </p>
          </div>
          <div
            class="knock2"
            style="width: 32.7%;background: #ffc837;height: 3.46666667rem;padding-top: 0.21333333rem;padding-right: 0;float:right"
          >
            <p
              class="mo"
              style="position: relative;height: 1.44rem;padding-left: 0.64rem;padding-top: 0.16rem;display: block;"
            >
              <img
                style=" position: relative;margin-top: 0.10666667rem;width: 0.74666667rem;margin-right: 0.16rem;"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAADN0lEQVRIS7WWYWhVZRjHf8/VsWWGEjlE+jCmze0cIaSaQ0WNDIvwnqvCkPKDoU6hDPWDM6lBaWAFGUsUdUIfQmXgdu/1g4HQLDR026fqHF0ug9DKisw+VFfvziPvvfesbaH3Panvp3Pe5/9/fud5z8v7PsKIkXVYrcIHAuuSPsdGxmyfMw28gHBYhNeTPnsjn0QPWZdWhV3AVVGeSQb4Jrb/CSqm/kMjSpMIs1SZYuZF+FWVbxDO/uzTux5umvmMwwwVegQeBXZ4Pm0FfSm4AWEfykWBxcmAHzodHq6E14B1CNPuWJFyBejIQXtzwO+ZmUxjPCcBh5Ct3nnel4zDbIV+Ea7kc8xdMcjltMOLIuwGqm2XrKT7RZXNqYDDXdOpTlTxpcB0VRZIdz01iXEc0iE2pS7wdcblXWBrTMBY+XueT+vxOuq1gj2a55Xhf1RYQrdQxaa7hET2Dz2fzf/dDA2s0QQd9whSSCMha5PnOfTvZij+vIvAhDKga6GwXJRtAkssPuov8jzmDfBjcde5HCjsrnJDOecFNGUdtqvwTjm5iSscTPm0SGctkyof4CpQaWHs93yeSju0ifCWhd5IchU5qs32fgnhE0vT/wGZslYZUAfCmvsJEuiQjMtpYN79BAGnTUUDCHVxQN0uOxLwhqXHLN23pqLvgFpLU5/n05htoCkU5guEkU8FRakTYX10ho7IecmA+oAnbUCqDKQC6m+n7amh6s8H+QmYPEbTb0BHgJU2oJJmEPjjNvqpFK+HseOodDtsTAjtMUCxpQqvRqf397HdMQz5kJroCDoBPBfDG0f6qefzfAF03KExFM7FcdtqE8qcpQG9w/dR2qFdhI22CWx0qnyUCgrtQLFnMKMHxl93OSmwyCZJOY3AqYd8nn0a8qNA5iXr0KLC/nJJbOKh8vKygI8j7XBFnQ4Tq+CSFqvsQmixSThWo+YAhRXmeshdp7b5Mn+Pqijtskso9HZbUj67s/Us1ARvIyywAipfDIW0Lb/A52mXVin2iDs9nzdHgxzaEebc8JnbDENR8q46Hh9XwVKUeQgzgEdKsd9QBhHOkCfrDfBV5Ck1nWcEPkv6bDPztwAM4ApIYzIICgAAAABJRU5ErkJggg=="
                alt
              />
              <span style=" color: #b12b00;  font-size: 0.74666667rem;">即将开始</span>
            </p>
            <p
              style="font-size: 0.74666667rem;position: relative;display: block;color: white;padding-left: 0.64rem;padding-right: 0;height: 1.28rem;left: 0;margin-left: 0;text-align: left;white-space: nowrap;padding-left: 1.86666667rem;"
            >5天</p>
          </div>
        </div>

        <div
          class="discript"
          style="  position: relative;background: white;padding-bottom: 0.8rem;padding-top: 0.8rem;"
        >
          <p
            style="    padding: 0 0.5rem;font-size: 0.85333333rem;width: calc(100% - 56px);"
          >{{item.name}}</p>
        </div>

        <div
          class="dis1"
          style="  overflow:hidden;  font-size: 0.74666667rem;position: relative;padding: 0.52rem 0.5rem;background: white;"
        >
          <span
            style="    font-size: 0.74666667rem;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;float:left"
          >说明：</span>
          <p
            style="margin-left: 0.8rem; font-size: 0.74666667rem;    display: block;position: relative;float: left;"
          >
            <i
              class="el-icon-check"
              style="margin-right: 3px;display: inline-block;width: 0.8rem;height: 0.8rem;border: 1px solid #0fca9d;border-radius: 50%;color: #0fca9d;font-size: 0.64rem;font-weight: 500;text-align: center;line-height: 0.69333333rem;"
            ></i>
            赔付
          </p>
          <p
            style="display: block;position: relative;float: left;margin-left: 0.8rem;font-size: 0.74666667rem;"
          >
            <i
              class="el-icon-check"
              style="    margin-right: 3px;display: inline-block;width: 0.8rem;height: 0.8rem;border: 1px solid #0fca9d;border-radius: 50%;color: #0fca9d;font-size: 0.64rem;font-weight: 500;text-align: center;line-height: 0.69333333rem;"
            ></i>
            生产日期和保质期
          </p>
          <p style="    display: block;position: relative;float: right;">
            <i class="el-icon-arrow-right"></i>
          </p>
        </div>

        <div
          class="dis2"
          style="overflow:hidden; margin: 0.25rem 0;position: relative;font-size: 0.74666667rem;padding: 0.52rem 0 0.52rem 0.53333333rem;background: white;"
        >
          <span
            style="    width: 85%;    display: inline-block;position: relative;float: left;"
          >已选：{{item.name}}</span>
          <span
            class="el-icon-arrow-right"
            style="  font-size: 0.74666667rem;top: 0;padding-right: 0.53333333rem;margin-top: 0.10666667rem;float:right"
          ></span>
        </div>
        <div style="background:white">
          <div
            class="dis3"
            style="position: relative;width: 100%;background: white;margin-bottom: 0.25rem; overflow-x:hidden"
          >
            <p
              style="font-size: 0.74666667rem;width: 87%;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;text-align: left;"
            >送至：天津市,天津市,和平区,劝业场街道,sadasd</p>
          </div>
          <div style="position: relative; padding: 0.4rem 0; font-size: 0.74666667rem;">运费：暂无运费信息</div>
        </div>

        <div
          style="position: relative;margin-top: 0.25rem;background: white;width: 100%;margin-top:5px;overflow:hidden"
        >
          <div style="    padding: 0.75rem 0.53333333rem 0.5rem 0.53333333rem;">
            <p style="    font-size: 14px;    float: left;">商品评价</p>
            <p style="    color: #cdcdcd;    float: right;font-size:14px">
              查看全部
              <span class="el-icon-arrow-right"></span>
            </p>
          </div>
        </div>

        <div style="position: relative;background: white;margin-top: 0.53333333rem;">
          <p
            style="    position: relative;padding: 0.53333333rem 0;font-size: 0.85333333rem;text-align: center;"
          >为你推荐</p>
          <div
            style="position: relative;width: 100%;overflow: scroll;    margin: 0.26rem auto;background: white;"
          >
            <div style="    position: relative;width: 100%;overflow-x: scroll;padding: 0.5rem 0;">
              <div style="    position: relative;width: 890px;white-space: nowrap;display: flex">
                <!-- 如果要循环就循环poike -->
                <div class="poikq">
                  <p
                    style="    position: relative;width: 100%;height: 5.3rem;overflow: hidden;border-radius: 0.26rem;"
                  >
                    <img
                      src="https://respic.wzq998.com//uploads/goods/20190925/ed0b732800886957fc327ca4a2d31a07.jpg"
                      alt
                      style="    position: relative;width: 100%;"
                    />
                  </p>
                  <p
                    style="    position: relative; width: 100%; height: 2rem; overflow: hidden; font-size: 0.74rem; margin: 0.32rem 0px;"
                  >水沫玉手链男款</p>
                  <p style="    font-size: 0.74rem;color: rgb(255, 46, 90);">￥680.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="position: relative; width: 100%;">
          <p
            style="position: relative;font-size: 18px;text-align: center;padding: 0.53333333rem;margin-top: 0.53333333rem;"
          >商品详情</p>
          <img
            src="https://respic.wzq998.com//uploads/ueditor/20191008/be67609342df6cf1a59f7bf36badd04e.jpg"
            alt
            style="    position: relative; width: 100%;"
          />
          <img
            src="https://respic.wzq998.com//uploads/ueditor/20191008/be67609342df6cf1a59f7bf36badd04e.jpg"
            alt
            style="    position: relative; width: 100%;"
          />
        </div>

        <div
          style="position: absolute; width: 100%; bottom: 0; left: 0;background: white; border-top: 1px solid #cdcdcd; -webkit-transition: bottom 0.3s linear; transition: bottom 0.3s linear;"
        >
          <div style="width: 45%;display: block;position: relative;float: left;">
            <div
              style="position: relative; float: left; text-align: center; height: 1.84rem; margin-top: 0.16rem; line-height: 1.84rem; margin-right: 0.53333333rem;"
            >
              <b
                style="    font-size: 0.96rem;display: inline;position: relative;text-align: center;padding: 2px;color: #6e6e6e;"
                class="el-icon-moon"
              ></b>
              <span
                style="    display: inline;color: black;position: relative;text-align: center;font-size: 14px;padding: 2px;"
              >收藏</span>
            </div>
            <span
              style="position: relative;float: left;text-align: center;height: 1.84rem;margin-top: 0.16rem;line-height: 1.84rem;margin-right: 0.53333333rem;"
            >
              <b
                class="el-icon-phone"
                style="    font-size: 0.96rem;display: inline;position: relative;text-align: center;padding: 2px;color: #6e6e6e;"
              ></b>
              <span
                style="    display: inline;color: black;position: relative;text-align: center;font-size: 14px;padding: 2px;"
              >客服</span>
            </span>
          </div>

          <div
            style="margin: 0.26666667rem 0;width: 54.8%;text-align: center;border-radius: 25px;-webkit-border-radius: 25px;-moz-border-radius: 25px;overflow: hidden;float:right"
          >
            <p
              style=" float:left;   background: linear-gradient(#5bebc8, #21d2a8);    width: 50%;border-top-left-radius: 25px;border-bottom-left-radius: 25px;display: block;height: 1.84rem;line-height: 1.84rem;font-weight: 500;color: white;"
              @click="pusharr"
            >加入购物车</p>
            <p
              style="      width: 50%;float:right;  border-top-right-radius: 25px;border-bottom-right-radius: 25px;background: #fa6969;height: 1.84rem;line-height: 1.84rem;font-weight: 500;color: white;"
            >原价购买</p>
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
      datalist: ""
    };
  },
  computed: {
    cartlength() {
      return this.$store.getters.cartlength;
    }
  },

  async created() {
    let id = this.$router.history.current.params.id;

    let data = await this.$axios.get("http://localhost:5200/goods/ll", {
      params: {
        id: id
      }
    });
    let data1 = data.data;
    this.datalist = data1;
  },


  methods: {
    async pusharr() {
      let id = this.$router.history.current.params.id;
      let curr = this.$store.state.cart.cartlist.filter(
        item => item.id === id
      )[0];

      if (curr) {
        alert("已经再购物车");
      } else {
        let username = this.$store.state.common.user.username;
        let data = await this.$axios.get(
          "http://localhost:5200/goods/cartpeople",
          {
            params: {
              username: username
            }
          }
        );
        var oo;
        data.data.forEach(item => {
          oo = item.id;
        });
        console.log(oo);
        if (oo === id) {
          alert("已经再购物车");
        }
         else {
          console.log("djaskldjsalkjdlksajd");
          this.datalist.forEach(item => {
            let goods = {
              id,
              price: item.sell_price,
              name: item.name,
              img: item.thumb
        
            };
            this.$store.commit("add2cart", goods);
            let username = this.$store.state.common.user.username;
            let data = this.$axios.get("http://localhost:5200/goods/charu", {
              params: {
                id: id,
                num: 1,
                username
              }
            });

            // console.log(this.$store);
          });
        }
      }
    },

    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.poikq {
  position: relative;
  float: left;
  width: 5.3rem;
  margin-left: 0.53rem;
}
.knock {
  height: 3.46666667rem;
  background: white;
  margin-top: 20px;
}
.showimg {
  width: 2250px;
  transition: none 0s ease 0s;
  left: -375px;
}
.showname {
  // background: white;
  padding-top: 0.52rem;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  margin-top: -1px;
  .showtop {
    background: white;
    padding-top: 0.52rem;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    margin-top: -1px;
    .showcontp1 {
      text-align: center;
      float: left;
      .i1 {
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 0.9rem;
        border-bottom: 2px solid transparent;
      }
    }
  }
}
.headtop {
  font-size: 0.85333333rem;
  padding: 0.64rem 1.06666667rem;
  text-align: center;
  font-weight: 500;
  background: white;
}
#box {
  position: absolute;
  height: auto;

  width: 100%;
  background: #efefef;
  margin-bottom: 80px;
}
</style>