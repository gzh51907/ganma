<template>
  <div>
    <p
      style="position: relative;font-size: 0.85333333rem;padding: 0.64rem 1.06666667rem;text-align: center;font-weight: 500;background: white;"
    >
      <span @click="goto('/cart')"
        class="el-icon-arrow-left"
        style="position: relative;display: block;float: left;font-size: 0.85333333rem;top: 0.10666667rem;"
      ></span>
      收银台
    </p>

    <div
      style="position: relative;font-size: 14px;margin-top: 0.26666667rem;padding: 0.48rem 0.53333333rem;background: white;"
    >订单号：GM201910141905310000021279</div>
    <div
      style="position: relative;font-size: 14px;padding: 0.74666667rem 0.53333333rem;background: white;"
    >
      支付金额：
      <span style="font-size: 14px;
    color: #fa6969;
    display: inline;">￥{{this.$route.params.num}}</span>
    </div>

    <p
      style="    font-size: 14px;position: relative;padding: 0.8rem 0 0.53333333rem 0.53333333rem;background: white;"
    >支付方式</p>

    <div style="    padding: 0 0.53333333rem;overflow:hidden;
    background: white;">
      <div style="    display: block;
    position: relative;
    float: left;">
        <p
          style="padding-top: 0.26666667rem;    display: block;
    position: relative;
    float: left;    background: #fa6969;
    line-height: 0.8rem;
    border: none; border-radius: 50%"
          class="el-icon-check"
        ></p>

        <div
          style="display: block;
    position: relative;
    float: left;
padding-left: 0.53333333rem;"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVQ4T6WTS0iUURTHf+f7/JyX5YyhlGigY4HEhPbCoFr0gNwWuCiCHvYgFVyUuEpy1SLdWS1aKG0sQhNc1SajF5TZwx5gi7LMUlFR0HHmm3vj+5xsQgOpC5e7uPf8zjn/879CZ7AErFaQYtDCspZo0O8hflTozO4F2bSsuEWPdJ/QkR1DxHLvtMYUId+bi9/0MmlPMxz9gRbjb/yYU0EMxEIrdq4q49KGC0RWFuMzvUzZ0zwZf05dfwPvpgdgEUjH5wEaa3f2DrrKbjAyN4bf9LHam8PX2WG0VnhMD/seHuD11AeQVJmSAAvD6tnVzfasLdS/aWBdRhEnCo7QPNCCrWzOFB7n1lAXp/pq0UhKJUlAyAxYX8r7CaQFSOgEIJhiMBmfovVzO3m+NeT5cvkeHeH2UBc3h+5gox3R5lvwi8fq3/uIgsDaBbGczM0fr3E4/yBZ6SG8hgdb2yitaRtsp+pVHTbqlwbaqg2fpinSiJEU6tlEH3FlUxqMcKy3mqslTXR868ZjmBzKr6D8cQV3Rx8kAYhlYXA50khNuBJBuDfSw9ZQCUErE1snSBMTpZVboZOk+uV5Wj61/QY4YzxXdNYd3+jcGLMqRk34JJuDGxd5wGnPmcr98aepAO2ObyYx44oIiv05e2jfdp1Ma8UCxKmiaeAK9W8vokRSAEt5TSvXVFWFlazPCDMemyCUnulqMhgddiLif1p5ScNqUE7vzhb8aX73nFFR53St/AKk9N8/039+55+r2O77YFSBHwAAAABJRU5ErkJggg=="
            style="    position: relative;width: 0.85333333rem;margin-top: 0.16rem;float:left"
            alt
          />
          <p style="padding-left: 0.26666667rem;display: block;position: relative;float: left;">
            <b style="    display: block;font-size: 0.74666667rem;">微信支付</b>
            <span style="    display: block;font-size: 0.64rem;color: #cdcdcd;">微信安全支付</span>
          </p>
        </div>
      </div>
      <div style="    display: block;
    position: relative;
    float: right;width: 50%;overflow:hidden"><p style="    display: block;
    position: relative;
    float: left;padding-top: 0.26666667rem;"><span class="el-icon-remove-outline" style="display: block;
    position: relative;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    line-height: 0.69333333rem;
    font-weight: 400;
    color: white;
    background: white;
    font-size: 0.64rem;
    text-align: center;
    border: 1px solid #cdcdcd;"></span></p>
    
    
    <div style="    display: block;
    position: relative;
    float: left;padding-left: 0.53333333rem;"><img src="../img/1.jpg" style="    position: relative;
    width: 0.85333333rem;
    margin-top: 0.16rem;    display: block;
 
    float: left;" alt="">
    
    <p style="    padding-left: 0.26666667rem;    display: block;
    position: relative;
    float: left;">
    
    <b style="    display: block;
    font-size: 0.74666667rem">支付宝支付</b>
    <span style="    display: block;
    font-size: 0.64rem;
    color: #cdcdcd;">支付宝安全支付</span>
    </p>
    
    </div>
    
    </div>
    </div>











    <div style="    position: relative;
    width: 89.33%;
    margin: 5.33333333rem auto;
    text-align: center;
    color: white;
    background: #fa6969;
    font-size: 14px;border-radius: 20px;
    padding: 0.64rem;">立即支付</div>








  </div>
</template>




<script>
export default {
  created(){
    console.log('pppppp:',this.$route.params.num)
  },
  methods:{
    goto(path){
      this.$router.push(path)
    }
  }
};
</script>



<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>