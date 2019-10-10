<template>
    <div>
        sadsad
    </div>
</template>

<script>
export default {
    async created() {
    // 发起ajax请求
    let sessionId = ''
    let recId = ''
    let data = await this.$axios.post("https://api.wzq998.com/api/brand/detail",
         {
        data: data,
      
    },
    {
        headers: {

            'Authorization': 'Bearer ' ,
            "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId,
    
        }
    }

    );
    console.log(data)
  }
    
}
</script>