import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUi)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
