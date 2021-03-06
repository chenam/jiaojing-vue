// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/all.css';
import './util/filter.js'
import $ from 'jquery'
import 'bootstrap/css/bootstrap.min.css';
import 'bootstrap/css/bootstrap-datetimepicker.min.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
