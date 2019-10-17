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
              <div class="menu" @click="go2goods('/select')">查询用户信息</div>
            </el-collapse-item>
            <el-collapse-item title="商品管理 commodity">
              <div class="menu" @click="go2goods('/order')">订单管理</div>
              <div class="menu" @click="go2goods('/goodsSearch')">商品信息管理</div>
               <div class="menu" @click="go2goodsAdd('/goodsadd')">添加商品</div>
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
        // console.log('user:',user);
        return user;
    }
  } ,
  methods : {
    logout() {
      localStorage.removeItem('username');
      
      this.$router.push('/login'); this.$router.go(0)
    },
    go2goods(path) {
      this.$router.push(path);
    },
    go2goodsAdd(path) {
      this.$router.push(path);
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
  background: #666 !important;
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
          border: 1px solid #2E363F;
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
        background: #2E363F;
        .menu {
          width: 100%;
          height: 30px;
          line-height: 30px;
          border-bottom: 1px solid #cccccc;
          background: #2E363F;
          color:#fff;
          cursor: pointer;
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
