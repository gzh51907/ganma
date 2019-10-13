<template>
  <div class="box">
    <div>
      <router-view />
    </div>
    <el-row :gutter="20" class="dibu" style="background:white;width:100%;margin:0">
      <el-col style="width:20%" v-for="item in databottom" :key="item.img">
        <div class="grid-content bg-purple" @click="goto(item.path)">
          <p class="p1">
            <img :src="item.img" alt @click="istrim(item.id)" v-if="!item.dis" />
            <img :src="item.img1" alt v-else />
          </p>
          <p class="p2">{{item.name}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      databottom: [
        {
          name: "home",
          path: "/home",
          id: "1",
          img1:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav12.png",
          img:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav11.png",
          name: "首页",
          dis: true
        },
        {
          path: "/classify",
          name: "classify",
          id: "2",
          img:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav21.png",
          img1:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav22.png",
          name: "分类",
          dis: false
        },
        {
   
          id: "3",
          img:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav51.png",
          img1:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav52.png",
          name: "小区购",
          dis: false
        },
        {
          path:'/cart',
          id: "4",
          img:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav31.png",
          img1:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav32.png",
          name: "购物车",
          dis: false
        },
        {
          path:'/mine',
          id: "5",
          img:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav41.png",
          img1:
            "https://api.wzq998.com/Forestproducts/public/static/api/img/bt_nav42.png",
          name: "我的",
          dis: false
        }
      ]
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    istrim(id) {
      //  console.log(index)
      this.databottom.forEach(item => {
        if (item.id === id) {
          item.dis = true;
          console.log(item.dis);
        } else {
          item.dis = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.p1 {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.p2 {
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 0.12rem;
  font-size: 0.63rem;
}
.dibu {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  img {
    width: 1.1rem;
    height: 1.1rem;
  }
}
</style>
