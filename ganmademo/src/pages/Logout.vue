<template>
    <el-container style="background:#efefef;" class="container">
        <el-header style="background:#fff;" class="header">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark">
                        <i class="el-icon-arrow-left"  style="font-size:25px;" @click="go2mine('/mine')"></i>
                        <span style="font-size:18px;" class="header_wenzi">设置</span>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-main  style="background:#fff;" class="main">
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple-dark"  v-for="item in datalist1" :key="item.name">
                        <span style="font-size:14px;">{{item.name}}</span>
                        <i class="el-icon-arrow-right" ></i>
                    </div>
                    
                </el-col>
            </el-row>
        </el-main>
        <el-footer style="height:350px;">
            <el-row>
                <el-button type="danger" round  @click="go2home('/home')" class="logout">退出登录</el-button>
            </el-row>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            datalist1 : [{
                name : '管理收货地址'
            },{
                name : '修改密码'
            },{
                name : '实名认证'
            }
            ]
        }
    },
    methods : {
        go2mine(path) {
            this.$router.push(path);
        },
        go2home(path) {
             this.$router.push(path);
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        height: 60px;
        margin-bottom: 5px;
        .grid-content{
        height: 60px;
        position: relative;
       
        .el-icon-arrow-left{
            position: absolute;
            left: 0;
            top : 50%;
            transform: translate(-50%,-50%);
        }
        .header_wenzi{
            display:block;
            position: absolute;
            left: 50%;
            top : 50%;
            transform: translate(-50%,-50%);
        }

    }
    }
    .main{
        padding-bottom: 0px;
        .el-col{
           
            .grid-content{
                height: 45px;
                position: relative;
                .el-icon-arrow-right{
                    position: absolute;
                    right: 0px;
                    font-size: 18px;
                    color : #000;
                    font-weight: bold;
                }
            }
        }
    }
    .el-footer{
        width: 100%;
        margin-top : 50px;

        .logout{
            width: 100%;
        }
    }
</style>