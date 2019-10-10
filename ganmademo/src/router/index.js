import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//这个是主页的组件
import Home from '../pages/Home.vue';



//这里面可以添加要跳转的路径
let router = new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component: Home
        },
        {
            path: '/',  
            redirect: '/home'
        }
    ]
})
//这里用来判断是否登录允许进入购物车或者其他
//设置全局路由守卫

export default router;
