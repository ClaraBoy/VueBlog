import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./srore/index";
import audio from "vue-mobile-audio";
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(audio)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
