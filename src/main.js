import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import router from './router/index'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$ajax= axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
