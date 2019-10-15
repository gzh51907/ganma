import vue from 'vue';

import vueRouter from 'vue-router';

vue.use(vueRouter);

//实例化vuerouter

let router = new vueRouter({
    routes:[
        {
            path:'/home'
        }
    ]
})

export default router
