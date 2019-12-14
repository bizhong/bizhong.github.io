import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/lbzui/index.less';
import {
  Backdrop,
  IconButton,
  TopAppBar,
} from '@lbzui/vue';

Vue.prototype.$LBZUI = {
  ripple: true,
  dense: false,
};

Vue.use(Backdrop);
Vue.use(IconButton);
Vue.use(TopAppBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
