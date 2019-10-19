<template>
    <div>
        <el-breadcrumb separator="/" style="margin-bottom:20px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>查询商品信息</el-breadcrumb-item>
        </el-breadcrumb>

      <template>
  <el-table
    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    style="width: 100%">
    <el-table-column label="店铺名称" width="100">
      <template slot-scope="scope">
        <span >{{ scope.row.brand }}</span>
      </template>
    </el-table-column>
    <el-table-column label="店铺id" width="100">
      <template slot-scope="scope">
        <span >{{ scope.row.brand_id }}</span>
      </template>
    </el-table-column>
     <el-table-column label="商品名"  width="250">
      <template slot-scope="scope">
        <span contenteditable="true" class="name">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="商品id"  width="80">
      <template slot-scope="scope">
        <span >{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="市场价"  width="80" >
      <template slot-scope="scope">
        <span contenteditable="true" class="market">{{ scope.row.markets_price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="售价"  width="80">
      <template slot-scope="scope">
        <span contenteditable="true" class="sale">{{ scope.row.sell_price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="数量"  width="80">
      <template slot-scope="scope">
        <span contenteditable="true" class="resle">{{ scope.row.number }}</span>
      </template>
    </el-table-column>
    <el-table-column label="商品图片"  width="150">
      <template slot-scope="scope">
        <img :src="scope.row.thumb " width="80" alt/>
        <!-- <img src={{ scope.row.thumb }}> -->
        <!-- <span >{{ scope.row.thumb }}</span> -->
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row,$event)">编辑并保存</el-button>
        <!-- <el-button
          size="mini"
          type="success"
          @click="handleAdd(scope.$index, scope.row)">添加</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         
      </template>
    </el-table-column>
  </el-table>
</template>
        <el-pagination background layout="prev, pager, next" :page-size="pagesize" :total="tableData.length" @current-change="handleCurrentChange"
        :current-page.sync="currentPage">
        </el-pagination>
    </div>
</template>

<script>
export default {
      data() {
        return {
          currentPage:1,
          pagesize:4,
          tableData : []
        }
    },
    methods: {
      // 修改
      async handleEdit(index, row,e) {
        // 下标  内容[包含店铺id 商品id]
        let num1 = document.querySelectorAll('.resle')[index];
        let sale = document.querySelectorAll('.sale')[index];
        let name = document.querySelectorAll('.name')[index];
        let market = document.querySelectorAll('.market')[index];
        //  console.log('qqwdasdasd:',num1.innerHTML)
        // console.log(index, row.number);
        let {id} = row;
     
        let {data} = await this.$axios.post('http://localhost:5200/goods/goodsUpdate',{
          params : {
            id,
            name : name.innerHTML,
            number:num1.innerHTML,
            sell_price:sale.innerHTML,
            markets_price: market.innerHTML
          }
        });

        if(data.code === 1) {
          this.$message({
            type:'success',
            message:'修改成功'
          })
        }else{
          this.$message({
            type:'danger',
            message:'修改失败'
          })
        }
        // console.log('res:',data);
      },

      // 添加
      // async handleAdd(index,row) {
      //   console.log(index,row);

      // },

      // 删除
      async handleDelete(index, row) {
        // console.log(index, row);
        let {id} = row;
        let {data} = await this.$axios.post('http://localhost:5200/goods/goodsDel',{
          params : {
            id
          }
        })
        if(data.code === 1) {
          this.$message({
            type:'success',
            message:'删除成功'
          })
        }else{
          this.$message({
            type:'danger',
            message:'删除失败'
          })
        }
  
        
      },

      // 分页-每页条数
      handleSizeChange(val) {
        // console.log(`每页${val}条`);
        this.pagesize = val;
      },
      // 当前页
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage = val;
      }
    },
    async created() {
      let {data} = await this.$axios.get('http://localhost:5200/goods/all')
      // console.log('dataall:',data);
      this.tableData = data.map(item => {
        return item
        // console.log(item)
      })
      // console.log('dadada:',this.tableData.length)
    },
      async updated() {
      let {data} = await this.$axios.get('http://localhost:5200/goods/all')
      // console.log('dataall:',data);
      this.tableData = data.map(item => {
        return item
        // console.log(item)
      })
      // console.log('dadada:',this.tableData.length)
    }
}
</script>

<style lang="scss" scoped>

</style>