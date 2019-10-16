<template>
  <div id="app">
    <el-container class="box">
      <el-header class="header clear">
        <p class="title fl clear">赶马后台管理系统</p>
        <ul class="headernav fl">
          <li>
            欢迎你
            <template v-if="!currentUser">
            <span>xxx</span>
            </template>
            <span v-else>{{currentUser}}</span>
          </li>
          <li @click="logout">退出登录</li>
        </ul>
      </el-header>
      <el-container class="contain">
        <el-aside width="200px" class="aside">
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                个人信息管理
                <i class="header-icon el-icon-info"></i>
              </template>
              <div class="menu">查看个人信息</div>
              <div class="menu">修改密码</div>
            </el-collapse-item>
            <el-collapse-item title="用户管理 usermanagement">
              <div class="menu">查询用户信息</div>
            </el-collapse-item>
            <el-collapse-item title="商品管理 commodity">
              <div class="menu">订单管理</div>
              <div class="menu">商品管理</div>
            </el-collapse-item>
          </el-collapse>
        </el-aside>
        <el-main class="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return{

    }
  },
  computed : {
    currentUser() {
        let user = localStorage.getItem('username');
    

      console.log('user:',user);
      return user;
    }
  } ,
  methods : {
    logout() {
      localStorage.removeItem('username');
      
      this.$router.push('/login'); this.$router.go(0)
    }
  }
   
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
.clear::after {
  content: "";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.el-collapse-item__header{
  background: rgba(255, 0, 0, 0.486) !important;
}
.el-collapse-item__content{
  padding: 0 !important;
}
#app {
  width: 100%;
  height: 100%;
  .box {
    width: 100%;
    height: 100%;
    .header {
      background: black;
      .title {
        height: 100%;
        line-height: 50px;
        color: white;
      }
      .headernav {
        height: 100%;
        margin-left: 700px;
        li {
          height: 100%;
          line-height: 50px;
          color: white;
          border: 1px solid red;
          float: left;
          box-sizing: border-box;
          cursor: pointer;
        }
      }
    }
    .contain {
      width: 100%;
      .aside {
        height: 700px;
        background: red;
        .menu {
          width: 100%;
          height: 30px;
          line-height: 30px;
          border-bottom: 1px solid #cccccc;
          background: aqua;
        }
      }
      .main{
          overflow-x: hidden;
          overflow-y: scroll;
          background:white;
      }
    }
  }
}
</style>
