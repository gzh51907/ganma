<template>
   <div>
       <div class="loginbox">
        <div class="loghead">
            <h1>赶马商城信息管理系统平台</h1>
            <span class="hcopy">版权所有 © 帅的网络科技有限公司 2015-2018</span>
        </div>
        <form action="" id="biaodan">
            <div class="control-grounp">
                <label for="" style="color: #B2DFEE">登录账号</label>
                <div class="username clearfix" style="margin-top:8px">
                    <span class="span1">
                        <i class="el-icon-user"></i>
                    </span>
                    <input type="text" id="usm" placeholder="admin" autocomplete="off"
                    v-model="username">
                </div>
            </div>
            <div class="control-grounp2">
                    <label for="" style="color: #B2DFEE" >登录密码</label>
                    <div class="pass clearfix" style="margin-top:8px">
                        <span class="span2">
                            <i class="el-icon-unlock"></i>
                        </span>
                        <input type="password" id="psw" autocomplete="off"
                        v-model="password">
                    </div>
            </div>
            <div class="anniu">
                <a href="###" class="a1">忘记密码</a>
                <a href="###" class="a2" @click="login(username,password)">登录</a>
            </div>
        </form>
        <p>推荐使用webkit内核浏览器，如chrome等</p>
    </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:'',
        }
    },
    methods:{
       async login(username,password){
        //    console.log('login:',username,password)
           let {data} = await this.$axios.get('http://localhost:5200/admin/login',{
               params:{
                   username:username,
                   password:password
               }
           })
           console.log('data:',data)
           if(data.code === 1) {
            //    登录成功
            localStorage.setItem('username',this.username);
            this.$router.push('/home');
           }else if(data.code === 0) {
            //    登录失败
            alert('用户名或密码不正确');
           }
       this.$router.go(0)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
            margin: 0;
            padding: 0;
        }

        body {
            background: #2E363F;
            margin-top: 10%;
        }

        .loginbox {
            width: 450px;
            overflow: hidden;
            margin: auto;

        }

        .loghead {
            padding: 10px 10px;
            text-align: center;
            font-size: 14px;
            line-height: 30px;

        }
        .clearfix::after{
            content: '';
            display: block;
            width: 0;
            height: 0;
            visibility: hidden;
            clear: both;
            overflow: hidden;
        }

        h1 {

            color: #B2DFEE;
            font-size: 28px;
        }

        .hcopy {
            color: gray;
        }

        #biaodan {
            width: 100%;
            box-sizing: border-box;
            border-top: 1px solid #616161;
            border-bottom: 1px solid #616161;
        }

        .control-grounp,.control-grounp2 {
            padding: 10px 0;
            
        }

        .span1,.span2 {
            display:block;
            float: left;
            width: 40px;
            height: 40px;
        }
        .span1{
            
            background-color: #28b779;
     
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
            .el-icon-user{
                color: #fff;
                font-size: 24px;
                position: absolute;
                top : 50%;
                left:50%;
                transform: translate(-50%,-50%);
            }
        }
        .span2{
            background-color: #ffb848;
         
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
            .el-icon-unlock{
                color: #fff;
                font-size: 24px;
                position: absolute;
                top : 50%;
                left:50%;
                transform: translate(-50%,-50%);
            }
        }
        #usm,#psw{
            height: 40px;
            border: 0px;
            display: block;
            width: 90%;
            line-height: 28px;
            margin-bottom: 3px;
            float: left;
            border: 1px solid #ccc;
            box-sizing: border-box;
          
        }
        .anniu{
            width: 100%;
            height: 30px;
            padding: 6px 4px 20px;
        }
        a{
            display: block;
            text-decoration: none;
            color: white;
            text-align: center;
            line-height: 30px;

        }
        .a1{
            width: 96px;
            height: 100%;
            float: left;
            background: #49afcd;
        }
        .a2{
            width: 335px;
            height: 100%;
            float: right;
            background: #51a351;
        }
        p{
            text-align: center;
        }
</style>