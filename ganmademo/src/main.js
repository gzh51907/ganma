import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.$axios = axios;
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
loading:require('./img/timg.png')
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
