<template>
  <div>
    <div class="wrap">
      <div class="header">订单管理</div>
      <div class="contain">
        <div class="conhead">
          <span>
            <input type="checkbox" />
          </span>
          订单列表
        </div>
        <table id="tb" >
          <thead id="thd">
            <tr>
              <th>用户名</th>
              <th>shopId</th>
              <th>商品数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="tbd">
            <tr v-for="item in orderList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id">
              <td>{{item.username}}</td>
              <td>{{item.id}}</td>
              <td contenteditable="true">{{item.num}}</td>
              <td>
                <!-- <span class="a1" @click="change(item.num,item.id)">编辑并保存</span> -->
                <span class="a2" @click="delet(item.id)">删除</span>
              </td>
            </tr>
          </tbody>
          <div id="fenye" class="clear">
          <el-pagination background 
          layout="total,prev, pager, next,jumper" 
          :total="orderList.length"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          @current-change="handleCurrentChange"
           >
          </el-pagination>
        </div>
        </table>
        
      </div>
    </div>
  </div>
</template>

<script>
import { async } from 'q';
export default {
  data() {
    return {
      orderList: "",
      currentPage:1,
      pagesize:5,
    };
  },
  async created() {
    let { data } = await this.$axios.get("http://localhost:5200/shoping/order");
    this.orderList = data;
  },
  methods:{
    //分页-每页条数
    handleSizeChange(val){
      this.pagesize = val;
    },
    //当前页
    handleCurrentChange(val){
      this.currentPage = val;
    },
    //删除当行
     async delet(id){
            let {data} = await this.$axios.post('http://localhost:5200/shoping/del',{
                params:{
                    id:id
                }
            })
            this.$router.go(0)
        },
    //修改数量
    // async change(num,id){
    //     await this.$axios.get('http://localhost:5200/shoping/change',{
    //       params:{
    //         num:num,
    //         id:id
    //       }
    //     })
    // }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  background: white;
}
.clear::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  clear: both;
}
.wrap {
  width: 100%;
  padding: 0 37px;
  /* background: aquamarine; */
}
.header {
  color: #cccccc;
  height: 44px;
  line-height: 44px;
  border-bottom: 2px solid orange;
}
.contain {
  width: 100%;
  height: auto;
  border: 1px solid #f0f8ff;
  background: white;
}
.contain .conhead span {
  display: inline-block;
  width: 40px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  border: 1px solid #f0f8ff;
}
#tb {
  width: 100%;
  border-collapse: collapse;
}
#thd {
  width: 100%;
}
#tb tr {
  width: 100%;
}
#thd tr th {
  text-align: center;
  border: 1px solid #cccccc;
  font-size: 11px;
  height: 30px;
  line-height: 30px;
}
#tbd tr {
  background: #ffffff;
}
#tbd tr td {
  text-align: center;
  border: 1px solid #cccccc;
  font-size: 11px;
  height: 30px;
  line-height: 30px;
  padding: 9px 9px;
}
#tbd tr td span {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: white;
}
#tbd tr td .a1 {
  width: 94px;
  height: 28px;
  line-height: 28px;
  background: #5bb75b;
}
#tbd tr td .a2 {
  width: 52px;
  height: 28px;
  line-height: 28px;
  background: #da4f49;
}
#tbd tr td .a3 {
  width: 50px;
  height: 28px;
  line-height: 28px;
  background: #49afcd;
}
#fenye {
  width: 100%;
  margin-top: 10px;
}
</style>