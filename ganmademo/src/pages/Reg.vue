<template>
    <div>
         <div class="con">
             <p>
                 <i class="el-icon-arrow-left"></i>
             </p>
            
            <p class="wz_zc">
                注册
            </p>
            <p class="ms">
                <span class="ms_span1">新用户注册，立即获得2积分</span>
            </p>
            <div class="user">
                <i class="el-icon-mobile-phone"></i>
                <input type="text" placeholder="用户名" class="username">
            </div>
            <div class="yzm">
                <i class="el-icon-circle-check"></i>
                <input type="text" placeholder="验证码" class="verify">
                <p class="get_verify">获取验证码</p>
            </div>
            <div class="paw">
                <i class="el-icon-unlock"></i>
                <input type="text" placeholder="6~20位登录密码" class="password">
            </div>
             <div class="paw">
                <i class="el-icon-unlock"></i>
                <input type="text" placeholder="再次确定密码" class="password">
            </div>
           
            <div class="zc">
                <input type="button" value="注册" class="reg">
            </div>
         </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .logo{
         width: 4.90666667rem;
         height: 3.30666667rem;
         margin: 0.8rem auto 0.55rem auto;
         .logo_img{
             width: 100%;
         }
    }
    .wz_zc{
        font-size: 1.3rem;
        font-weight: 600;
        padding-left: 5.3%;
        margin-top: 1.05rem;
        margin: 0px;
    }
    .ms{
        margin: 0px;
        display: flex;
        font-size: .92rem;
        padding: 0.3rem 5.3%;
        margin-bottom: 2.4rem;
        .ms_span2{
            color: #0fca9d
        }
    }
    .user{
        width: 89.3%;
        margin: 0 auto 0.8rem auto;
        position: relative;
        .username{
            width: 100%;
            height: 1.94rem;
            font-size: 0.84666667rem;
            line-height: 1.94rem;
            padding: 0 0.8rem 0 1.38rem;
            border:none;
            outline: none;
            border-bottom: 1px solid #cdcdcd;
        }
        .el-icon-mobile-phone {
            position: absolute;
            z-index: 20;
            width: 0.5rem;
            height: 0.84666667rem;
            top: 0.55rem;
            left: 0;
        }
        
    }
    .paw{
        width: 89.3%;
        margin: 0 auto 0.8rem auto;
        position: relative;
        .password{
            width: 100%;
            height: 1.94rem;
            font-size: 0.84666667rem;
            line-height: 1.94rem;
            padding: 0 0.8rem 0 1.38rem;
            border:none;
            outline: none;
            border-bottom: 1px solid #cdcdcd;
        }
        .el-icon-unlock {
            position: absolute;
            z-index: 20;
            width: 0.5rem;
            height: 0.84666667rem;
            top: 0.55rem;
            left: 0;
        }
       
    }
    .yzm{
        width: 89.3%;
        margin: 0 auto 0.8rem auto;
        position: relative;
        .verify{
            width: 100%;
            height: 1.94rem;
            font-size: 0.84666667rem;
            line-height: 1.94rem;
            padding: 0 0.8rem 0 1.38rem;
            border:none;
            outline: none;
            border-bottom: 1px solid #cdcdcd;
        }
        .el-icon-circle-check {
            position: absolute;
            z-index: 20;
            width: 0.5rem;
            height: 0.84666667rem;
            top: 0.55rem;
            left: 0;
        }
        .get_verify{
            position: absolute;
            font-size: 12px;
            width: 4.26666667rem;
            text-align: center;
            color: white;
            background: #70d9ba;
            padding: 0.36rem 0;
            bottom: -0.2rem;
            right: 0;
            z-index: 500;
            border-radius: 15px;
        }
        
    }
     .zc{
            position: relative;
            width: 89.33%;
            height: 2.22rem;
            margin: 1.66rem auto;
            .reg{
                position: absolute;
                top: -1.67rem;
                left: 0px;
                width: 100%;
                height: 2.22rem;
                margin: 1.66rem auto;
                border-radius: 25px;
                -webkit-border-radius: 25px;
                -moz-border-radius: 25px;
                -ms-border-radius: 25px;
                font-size: 0.85333333rem;
                font-weight: 600;
                color: white;
                border:none;
                outline: none;
                background: -webkit-gradient(linear, left top, right top, from(#65efce), to(#15cca0));
                }
        }
</style>