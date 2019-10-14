<template>
    <div>
         <el-form class="con" 
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="regForm"
            label-width="100px"
         >
             <p>
                 <i class="el-icon-arrow-left" @click="go2Login('/login')"></i>
             </p>
            
            <p class="wz_zc">
                注册
            </p>
            <p class="ms">
                <span class="ms_span1">新用户注册，立即获得2积分</span>
            </p>
            <div class="user"  style="     overflow: hidden;">
                <i class="el-icon-mobile-phone"></i>
                <input type="text" placeholder="用户名" class="username" v-model="ruleForm.username">
            </div>
            <div class="yzm"  style="     overflow: hidden;">
                <i class="el-icon-circle-check"></i>
                <input type="text" placeholder="验证码" class="verify">
                <p class="get_verify">获取验证码</p>
            </div>
            <div class="paw"  style="     overflow: hidden;">
                <i class="el-icon-unlock"></i>
                <input type="text" placeholder="6~20位登录密码" class="password" v-model="ruleForm.password">
            </div>
             <div class="paw"  style="     overflow: hidden;">
                <i class="el-icon-unlock"></i>
                <input type="text" placeholder="再次确定密码" class="password" v-model="ruleForm.checkPass">
            </div>
           
            <div class="zc">
                <input type="button" value="注册" class="reg" @click="submitForm">
            </div>
         </el-form>
    </div>
</template>

<script>
export default {
     data() {
          const validatePass = (rule, value, callback) => {
            if (value !== this.ruleForm.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };

        //校验用户名是否存在
        const checkUsername = async (rule, value, callback) => {
           let {data} = await this.$axios.get('http://localhost:5200/user/check',{
             params:{
               username : this.ruleForm.username
             }
           })
          //  console.log('data:',data);
           if(data.code === 0) {
              callback(new Error('用户名已存在!'));
           }else{
             callback();
           }
        };
        return {
            
            ruleForm:{
                username : '',
                password : '',
                checkPass : ''
            },
             rules: {

                username: [
                    { required: true, message: '亲(づ￣3￣)づ╭❤～，用户名必须填写噢(～￣▽￣)～', trigger: 'blur' },
                     { validator: checkUsername, trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                     { min: 3, max: 12, message: '密码长度必须在 6 到 20 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
      };
    },

    methods : {
        submitForm() {
          //校验整个表单
          this.$refs.regForm.validate(async (valid) => {

            if (valid) {
              let {username,password} = this.ruleForm;

              let {data} = await this.$axios.post('http://localhost:5200/user/reg',{
                username,
                password
              })
              console.log('data:',data);
              if(data.code === 1) {
                this.$router.replace({name:'login'});
              }else{
                alert('注册失败');
              }
            } else {
              window.console.log('error submit!!');
              return false;
            }
          });
      },
      go2Login(path) {
          this.$router.push(path);
      }
    }
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