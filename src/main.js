import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Swipe, SwipeItem, Sticky } from 'vant';


//创建事件总线
Vue.prototype.$bus = new Vue()

Vue.use(Sticky);
Vue.use(Swipe,);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

