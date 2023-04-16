import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/rbase'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
//在原型链上添加事件监听用于传递图片加载的状态
// Vue.prototype.$bus=new Vue()
export const EventBus =new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
