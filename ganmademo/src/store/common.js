import axios from 'axios';

export default {
    state : {
        user : null,
    },
    mutations : {
        //登录 & 注册

        // 登录
        login(state,{username,Authorization}) {
            state.user = {
                username,
                Authorization
            }

            // console.log('state.user:',state.user)
            //存入本地
            localStorage.setItem('user',JSON.stringify({username,Authorization}));
        },

        // 登出
        logout(state) {
            state.user = null;
            // 清空本地存储
            localStorage.removeItem('user');

        }
    },
    actions : {
        async checkLogin(context,payload) {
            // 判断user是否存在
            let user = localStorage.getItem('user')
            // console.log('user:',user);
            if(!user) {
                context.commit('logout');
            }else {
                user = JSON.parse(user);
           
                let { data } = await axios.get('http://106.53.2.52:5200/verify',{
                    // 请求头
                    headers : {
                        Authorization : user.Authorization
                    }
                })
                // console.log('data:',data)
                if(data.code === 1) {
                    // 未过期
                    context.commit('login',user);
                }else {
                    // 过期
                    // 
                    context.commit('logout');
                    return 400;
                }
              
            }
            return 200;
        }
    }
    
}