<template>
  <div>
    <el-form
      class="con"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="regForm"
      label-width="100px"
    >
      <p>
        <i class="el-icon-arrow-left" @click="goto('/mine')"></i>
      </p>
      <div class="logo">
        <el-image
          src="https://api.wzq998.com/Forestproducts/public/static/api/img/login_logo.png"
          class="logo_img"
        ></el-image>
      </div>
      <p class="wz_dl">登录</p>
      <p class="ms">
        <span class="ms_span1">欢迎登录赶马商城。若无账号</span>
        <span class="ms_span2" @click="go2Reg('/reg')">立即注册</span>
      </p>
      <div class="user" style="overflow:hidden">
        <i class="el-icon-mobile-phone"></i>
        <input type="text" placeholder="请输入用户名" class="username" v-model="ruleForm.username" />
      </div>
      <div class="paw" style="overflow:hidden">
        <i class="el-icon-unlock"></i>
        <input type="password" placeholder="请输入密码" class="password" v-model="ruleForm.password" />
      </div>
      <div class="mdl">
        <el-form style="margin-top:20px;">
          <el-form-item>
            <el-checkbox label="记住密码" v-model="ruleForm.mdl"></el-checkbox>
          </el-form-item>
        </el-form>
        <p class="forget">忘记密码？</p>
      </div>

      <div class="dl">
        <input type="button" value="登录" class="login" @click="submitForm" />
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        username: [
          {
            required: true,
            message: "亲(づ￣3￣)づ╭❤～，用户名必须填写噢(～￣▽￣)～",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      //校验整个表单
      this.$refs.regForm.validate(async valid => {
        if (valid) {
          let { username, password, mdl } = this.ruleForm;
          // console.log(username);
          //将用户名存入本地
          // localStorage.setItem("user", username);

          let { data } = await this.$axios.get(
            "http://106.53.2.52:5200/user/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );
          // console.log("data:", data);

          if (data.code === 1) {
            let  {targetUrl}  = this.$route.query;
          
        // console.log(targetUrl,'456465465465',typeof(targetUrl))

            this.$store.commit('login',{
              username,Authorization:data.data
            })

            this.$router.replace({
              path: targetUrl || "/mine"
            });

            localStorage.setItem("Authorization", data.data);
          } else {
               this.$message({
          type:'info',
          message:'用户名或密码不正确！'
        })
          
          }
        } else {
          // window.console.log("error submit!!");
          return false;
        }
      });
    },
    goto(path) {
      this.$router.push(path);
    },
    go2Reg(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 4.90666667rem;
  height: 3.30666667rem;
  margin: 0.8rem auto 0.55rem auto;
  .logo_img {
    width: 100%;
  }
}
.wz_dl {
  font-size: 1.12rem;
  font-weight: 600;
  padding-left: 5.3%;
  margin: 0px;
}
.ms {
  margin: 0px;
  display: flex;
  font-size: 0.92rem;
  padding: 0.3rem 5.3%;
  margin-bottom: 2.4rem;
  .ms_span2 {
    color: #0fca9d;
  }
}
.user {
  width: 89.3%;
  margin: 0 auto 0.8rem auto;
  position: relative;
  .username {
    width: 100%;
    height: 1.94rem;
    font-size: 0.84666667rem;
    line-height: 1.94rem;
    padding: 0 0.8rem 0 1.38rem;
    border: none;
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
.paw {
  width: 89.3%;
  margin: 0 auto 0.8rem auto;
  position: relative;
  .password {
    width: 100%;
    height: 1.94rem;
    font-size: 0.84666667rem;
    line-height: 1.94rem;
    padding: 0 0.8rem 0 1.38rem;
    border: none;
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
.mdl {
  width: 89.3%;
  margin: 1.11rem auto;
  display: flex;
  height: 1.330667rem;
  justify-content: space-between;
  align-items: center;

  .forget {
    font-size: 0.9rem;
    color: #fa6969;
    text-decoration: underline;
  }
}
.dl {
  position: relative;
  width: 89.33%;
  height: 2.22rem;
  margin: 1.66rem auto;

  .login {
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
    border: none;
    outline: none;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#65efce),
      to(#15cca0)
    );
  }
}
</style>