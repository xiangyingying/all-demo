import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ListItem from '@/components/ListItem.vue'
import axios from 'axios'
import VueScroller from 'vue-scroller'
import Vant from 'vant'
import {Loading} from 'vant'
Vue.use(Loading)
Vue.use(Vant)
Vue.prototype.axios=axios
Vue.component('ListItem',ListItem)
Vue.config.productionTip = false
Vue.use(VueScroller)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
