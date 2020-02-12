import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible/index.js'
Vue.config.productionTip = false
import Vant from 'vant'
import 'vant/lib/index.css'
import {Card} from 'vant'
import {Checkbox,CheckboxGroup} from 'vant'
import axios from 'axios'
Vue.use(Card)
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Vant)
Vue.prototype.axios=axios
new Vue({
  render: h => h(App),
}).$mount('#app')
