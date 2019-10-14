import Vue from 'vue';

import Vuex from 'vuex';
import app from './app'
import lists from './lists'
import cart from './cart'


Vue.use(Vuex)

const store = new Vuex.Store({

//放模块，上面记得引入
    modules:{
            app,
        lists,
        cart
 
    }
})

export default store;
