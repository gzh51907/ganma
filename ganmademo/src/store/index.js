import Vue from 'vue';

import Vuex from 'vuex';
import app from './app';
import lists from './lists';
import common from './common';
import cart from './cart'


Vue.use(Vuex)

const store = new Vuex.Store({

//放模块，上面记得引入
    modules:{
        app,
        lists,
       common,
       cart

 
    }
})

export default store;
