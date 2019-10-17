<template>
   <div class="box">
       <p class="wenzi">welcome</p>
   </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>

<style lang="scss" scoped>
    .box{
        width: 100%;
        height: 100%;
        position: relative;
        // background : #58c;
        // opacity: 0.6;
        .wenzi{
            color:blue;
            opacity: 0.6;
            font-size: 80px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%)
        }
    }
</style>