import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/lbzui/index.less';
import {
  Backdrop,
  Button,
  Icon,
  IconButton,
  List,
  ListItem,
  Tab,
  TabItem,
  TopAppBar,
} from '@lbzui/vue';

Vue.prototype.$lbzui = {
  ripple: true,
  dense: false,
};

Vue.use(Backdrop);
Vue.use(Button);
Vue.use(Icon);
Vue.use(IconButton);
Vue.use(List);
Vue.use(ListItem);
Vue.use(Tab);
Vue.use(TabItem);
Vue.use(TopAppBar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
