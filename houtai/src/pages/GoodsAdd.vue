<template>
    <div>
        <el-breadcrumb separator="/" style="margin-bottom:30px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="店铺名称">
                <el-input v-model="form.brand" ></el-input>
            </el-form-item>
            <el-form-item label="店铺id">
               <el-input v-model="form.brand_id" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="商品名">
                <el-input v-model="form.name" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="商品id">
               <el-input v-model="form.id" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="市场价">
                <el-input v-model="form.markets_price" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="当前售价">
                <el-input v-model="form.sell_price" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="数量">
                <el-input v-model="form.number" placeholder="请输入数字"></el-input>
            </el-form-item>
           
            
            <el-form-item>
                <el-button type="primary" @click="Add()">立即添加</el-button>
                <el-button @click="quxiao()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form : {
            brand : '',
            brand_id : '',
            name : '',
            id : '',
            markers_price : '',
            sell_price : '',
            number : '',
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      async Add() {
        //   console.log('ss:',this.$refs.form.model)
        let {brand,brand_id,name,id,markers_price,sell_price,number} = this.$refs.form.model;
        let {data} = await this.$axios.post('http://106.53.2.52:5200/goods/add',{
            
                brand,
                brand_id,
                name,id,
                markers_price,
                sell_price,
                number
            
        })
        // console.log('res:',data)
        if(data.code === 1) {
           this.$message({
            type:'success',
            message:'添加成功'
          })
        }else if(data.code === 0) {
            this.$message({
                type : 'danger',
                message:'店铺id或商品id已存在'
            })
        }

        // console.log('data:',brand,brand_id,name,id,markers_price,sell_price,number)
      },

    // 取消
      quxiao() {
        
        //    console.log('rr:',this.form.brand)
            this.form.brand ='';
            this.form.brand_id = '';
            this.form.name = '';
            this.form.id = '';
            this.form.markers_price = '';
            this.form.sell_price = '';
            this.form.number = '';
      
    }
    }
}
</script>

<style lang="scss" scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>