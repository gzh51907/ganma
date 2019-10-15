<template>
    <div>
        <el-breadcrumb separator="/" style="margin-bottom:30px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="from" label-width="80px">
            <el-form-item label="店铺名称">
                <el-input v-model="form.shopname" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="店铺id">
               <el-input v-model="form.id" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="商品名">
                <el-input v-model="form.goodsname" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="商品id">
               <el-input v-model="form.goodsid" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="市场价">
                <el-input v-model="form.marketprice" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="当前售价">
                <el-input v-model="form.sellprice" placeholder="请输入数字"></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
               <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary">立即添加</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        imageUrl: '',
        form : {
            shopname : '',
            shopid : '',
            goodsname : '',
            goodsid : '',
            markerprice : '',
            sellprice : '',
            number : '',
            goodimg : ''
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