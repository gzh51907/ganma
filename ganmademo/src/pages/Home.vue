<template>
    <div>
   dsad
    </div>
</template>

<script>
export default {
    async created() {
    // 发起ajax请求
    let sessionId = ''
    let recId = ''
    let data = await this.$axios.get("https://api.wzq998.com/api/index/guess?token=&mac_no=&page=2&pageSize=6",
    
    

    );
    console.log(data)
  }
    
}
</script>