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
//这里面可以添加要跳转的路径
let router = new VueRouter({
    routes: [{
        name: 'housing',
        path: '/housing',
        component: Housing
    },{
        name: 'cart',
        path: '/cart',
        component: Cart
    },
        {
            name: 'details',
            path: '/details',
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
            component: Reg}
    ]
})
//这里用来判断是否登录允许进入购物车或者其他
//设置全局路由守卫

export default router;