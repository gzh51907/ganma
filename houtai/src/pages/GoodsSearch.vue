<template>
    <div>
        <el-breadcrumb separator="/" style="margin-bottom:20px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>查询商品信息</el-breadcrumb-item>
        </el-breadcrumb>

      <template>
  <el-table
    :data="tableData"
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
        <span contenteditable="true">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="商品id"  width="80">
      <template slot-scope="scope">
        <span >{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="市场价"  width="80">
      <template slot-scope="scope">
        <span contenteditable="true">{{ scope.row.markets_price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="售价"  width="80">
      <template slot-scope="scope">
        <span contenteditable="true">{{ scope.row.sell_price }}</span>
      </template>
    </el-table-column>
    <el-table-column label="数量"  width="80">
      <template slot-scope="scope">
        <span contenteditable="true">{{ scope.row.number }}</span>
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
          @click="handleEdit(scope.$index, scope.row)">编辑并保存</el-button>
        <el-button
          size="mini"
          type="success"
          @click="handleDelete(scope.$index, scope.row)">添加</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
         
      </template>
    </el-table-column>
  </el-table>
</template>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
      data() {
      return {
        tableData: [{
        brand: "王子清",
        brand_id : 11,
        id : 16,
        markets_price : "18.00",
        name : "王子清 茉莉花茶、黄山贡菊、山楂干、柠檬片  30g/瓶 ",
        number : 997,
        sell_price : "9.90",
        thumb: "https://respic.wzq998.com//uploads/goods/20190917/9fd9f8026e4fd970161216187d799f46.jpg"
        },
        {
        brand: "王子清",
        brand_id : 11,
        id : 32,
        markets_price : "89.00",
        name : "王子清 蜂巢蜜 500克/盒 ",
        number : 1006,
        sell_price : "38.00",
        thumb: "https://respic.wzq998.com//uploads/goods/20190808/7bedd7a88484e95f0ad2a209b66cf257.jpg"
        },
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>

<style lang="scss" scoped>

</style>