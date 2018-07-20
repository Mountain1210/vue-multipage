// exports.assetsPath = function (_path) {
  import Vue from 'vue'
  import stores from '../../store/store'
  import App from './index.vue'
  import router from './router/index_router'
  import 'element-ui/lib/theme-chalk/index.css';
  import ElementUI from 'element-ui';
  Vue.use(ElementUI);
  require('./assets/css/base.css');
  require('./assets/css/icon.css');
  Vue.config.productionTip = false;
// }
