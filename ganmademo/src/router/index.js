import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//这个是主页的组件
import Home from '../pages/Home.vue';
//分类
import Classify from '../pages/classify.vue'
//列表
import List from '../pages/lists.vue';
//我的
import Mine from '../pages/Mine.vue';
// 登录
import Login from '../pages/Login.vue';
// 注册
import Reg from '../pages/Reg.vue';
import Details from '../pages/Details.vue'
import Cart from '../pages/Cart.vue'
import Housing from '../pages/Housing.vue'
import last from '../pages/last.vue'
// 退出
import Logout from '../pages/Logout.vue'
import store from '../store';

import Order from '../pages/Order.vue'
//这里面可以添加要跳转的路径
let router = new VueRouter({
    routes: [{
        name: 'housing',
        path: '/housing',
        component: Housing
    },{
        name: 'cart',
        path: '/cart',
       meta : {
            requirsAuth : true
        },

              {
            name: 'last',
            path: '/last',
            component: last
        },
        {
            name: 'details',
            path: '/details/:id',
            component: Details
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            name: 'classify',
            path: '/classify',
            component: Classify

        },
        {
            name: 'lists',
            path: '/lists/:id',
            component: List
        },
        // 我的
        {
            name: 'mine',
            path: '/mine',
            component: Mine
        },

        //登录
        {
            name: 'login',
            path: '/login',
            component: Login
        },

        //注册
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },

        //退出
        {
            name: 'logout',
            path: '/logout',
            component: Logout
        },
        //订单
        {
            name:'order',
            path:'/order',
            component:Order
        }
    ]
});
//这里用来判断是否登录允许进入购物车或者其他
//设置全局路由守卫
router.beforeEach(async function(to,from,next) {
    
    if(to.meta.requirsAuth) {
        let user = localStorage.getItem('user');
        // console.log('55444')
        if(user) {
            let res = await store.dispatch('checkLogin');
            // console.log('res:',res);
            if(res === 400) {
                console.log('to.fullPath:',to.fullPath)
                next({
                    path : '/login',
                    query : ({
                        targetUrl : to.fullPath
                    })
                })
            }else {
                next();
            }
         
        }else {
            console.log('to.fullPatheererrerer:',to.fullPath)
            router.push({
                path : '/login',
                query : ({
                    targetUrl : to.fullPath
                })
                // this.$router.push(to.fullPath)
            })
        }
    }else{
        next();
    }
})

export default router;