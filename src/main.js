import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AnimateCss from 'animate.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(AnimateCss);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
