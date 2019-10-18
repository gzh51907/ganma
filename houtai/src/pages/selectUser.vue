<template>
<div>
  <div class="wrap">
        <div class="header">
            用户信息管理
        </div>
        <div class="contain">
            <div class="conhead">
                 <span>
                <input type="checkbox">
            </span>
                用户信息表
            </div>
            <table id="tb">
                <thead id="thd">
                    <tr>
                       
                        <th>用户名</th>
                        <th>注册时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody id="tbd">
                    <tr v-for="item in userlist" :key="item.username">
                      
                        <td>{{item.username}}</td>
                        <td>{{item.regtime}}</td>
                        <td>
                            <span class="a2" @click="delet(item.username)">删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="fenye" class="clear">
                <div class="btnbox">
                    <span class="first">First</span>
                    <span class="prev">previous</span>
                    <span class="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span class="next">next</span>
                    <span class="last">last</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userlist:'',
      }
    },
   async created(){
       let {data} = await this.$axios.get('http://106.53.2.52:5200/user/all')
        this.userlist = data
    },
    methods:{
       async delet(username){
            let {data} = await this.$axios.post('http://106.53.2.52:5200/user/del',{
                params:{
                    username:username
                }
            })
            this.$router.go(0)
        }
    }
  }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100%;
    background: white;
}
.clear::after{
    content: '';
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    clear: both;
}
.wrap{
    width: 100%;
    padding: 0 37px;
}
.header{

    color: #cccccc;
    height: 44px;
    line-height: 44px;
    border-bottom: 2px solid orange;
}
.contain{
    width: 100%;
    height: auto;
    border: 1px solid #f0f8ff;
}
.contain .conhead span{
    display: inline-block;
    width: 40px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #f0f8ff;
}
#tb{
    width: 100%;
    border-collapse: collapse;
}
#thd{
    width: 100%;
}
#tb tr{
    width: 100%;
}
#thd tr th{
    text-align: center;
    border: 1px solid #cccccc;
    font-size: 11px;
    height: 30px;
    line-height: 30px;
}
#tbd tr{
    background: #ffffff;
}
#tbd tr td{
    text-align: center;
    border: 1px solid #cccccc;
    font-size: 11px;
    height: 30px;
    line-height: 30px;
    padding: 9px 9px;
}
#tbd tr td span{
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: white;
}
#tbd tr td .a1{
    width: 94px;
    height: 28px;
    line-height: 28px;
    background: #5bb75b;
}
#tbd tr td .a2{
    width: 52px;
    height: 28px;
    line-height: 28px;
    background: #da4f49;
}
#tbd tr td .a3{
    width: 50px;
    height: 28px;
    line-height: 28px;
    background: #49afcd;
}
#fenye{
    width: 100%;
    margin-top: 10px;
}
.btnbox{
    float: right;
}
.btnbox span{
    display: inline-block;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #cccccc;
    background: #f5f5f5;
    font-size: 9px;
    cursor: pointer;
}
.btnbox span:nth-child(1){
    width: 46px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.btnbox span:nth-child(2){
    width: 70px;
}
.btnbox span:nth-child(3){
    width: 30px;
}
.btnbox span:nth-child(4){
    width: 30px;
}
.btnbox span:nth-child(5){
    width: 30px;
}
.btnbox span:nth-child(6){
    width: 30px;
}
.btnbox span:nth-child(7){
    width: 30px;
}
.btnbox span:nth-child(8){
    width: 48px;
}
.btnbox span:nth-child(9){
    width: 46px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.btnbox span.active{
    background: #49afcd;
}
</style>