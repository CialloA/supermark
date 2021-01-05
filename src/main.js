import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
