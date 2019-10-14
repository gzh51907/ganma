import Vue from 'vue';

import Vuex from 'vuex';
import app from './app'
import lists from './lists'


Vue.use(Vuex)

const store = new Vuex.Store({

//放模块，上面记得引入
    modules:{
            app,
        lists,
 
    }
})

export default store;
