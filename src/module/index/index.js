// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import stores from '../../store/store'
import App from './index.vue'
import router from './router/index_router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
require('./assets/css/base.css');
require('./assets/css/icon.css');
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:stores,
  template: '<App/>',
  components: { App }
})
