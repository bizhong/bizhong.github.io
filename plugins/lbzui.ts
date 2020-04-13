import Vue from 'vue'
import {
  Backdrop,
  Button,
  Card,
  Checkbox,
  Dialog,
  Divider,
  Drawer,
  EmptyState,
  FAB,
  Icon,
  IconButton,
  List,
  ListItem,
  Radio,
  Snackbar,
  State,
  Switch,
  Tab,
  TabItem,
  TopAppBar
} from '@lbzui/vue'

Vue.prototype.$lbzui = {
  dense: false,
  ripple: true
}

Vue.use(Backdrop)
Vue.use(Button)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(EmptyState)
Vue.use(FAB)
Vue.use(Icon)
Vue.use(IconButton)
Vue.use(List)
Vue.use(ListItem)
Vue.use(Radio)
Vue.use(State)
Vue.use(Switch)
Vue.use(Tab)
Vue.use(TabItem)
Vue.use(TopAppBar)

Vue.prototype.$lbzSnackbar = Snackbar
