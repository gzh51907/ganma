import vue from 'vue';

import vueRouter from 'vue-router';

vue.use(vueRouter);


// 主页的组件
// 用户
import GoodsSearch from '../pages/GoodsSearch.vue';
import GoodsAdd from '../pages/GoodsAdd.vue';

//实例化vuerouter

let router = new vueRouter({
    routes:[
        {
            // 查询商品
            name : 'goodsSearch',
            path : '/goodsSearch',
            component : GoodsSearch
        },
        {
            //添加商品
            name : 'goodsadd',
            path : '/goodsadd',
            component : GoodsAdd
        }
    ]
})

export default router
