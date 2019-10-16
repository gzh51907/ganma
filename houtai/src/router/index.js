import vue from 'vue';

import vueRouter from 'vue-router';

vue.use(vueRouter);
import GoodsSearch from '../pages/GoodsSearch.vue';
import GoodsAdd from '../pages/GoodsAdd.vue';
import Login from '../pages/login.vue'


import selectUser from '../pages/selectUser.vue'
import orderList from '../pages/orderlist.vue'
// 首页
import Home from '../pages/Home.vue';

//实例化vuerouter
let router = new vueRouter({
    routes:[
        {     // 查询商品
            name : 'goodsSearch',
            path : '/goodsSearch',
            component : GoodsSearch
        },
        {
            //添加商品
            name : 'goodsadd',
            path : '/goodsadd',
            component : GoodsAdd},
      {  name:'login',
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/login'
        },
        {
            name:'select',
            path:'/select',
            component:selectUser
        },{
            name:'order',
            path:'/order',
            component:orderList

        },
        {
            // 后台首页
            name : 'home',
            path : '/home',
            component : Home
        }
    ]
});

// 路由守卫
router.beforeEach(async function(to,from,next) {
    next()
})

export default router
