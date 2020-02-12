import Vue from 'vue'
import "amfe-flexible/index.js"
import ItemIcon from '@/components/ItemIcon.vue'
import axios from 'axios'
import video from 'video.js'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import { IndexBar, IndexAnchor } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.filter('formatVal',function(val){
    if(val.length>6){
        val=val.slice(0,6)+"..."
    }
    return val
})
Vue.filter('formatPly',function(ply){
    if(ply>10000){
        ply=Math.ceil(ply/1000)/10+"万"
    }
    return ply
})
Vue.filter('formatTime',function(val,min,sec){
    if(Math.ceil(val/1000/60)<10){
        min=Math.ceil(val/1000/60)
    }
    if(Math.ceil(val/1000%60)>=10){
        sec=Math.ceil(val/1000%60)
    }else{
        sec="00"
    }
    return min+":"+sec
})
Vue.prototype.axios=axios
Vue.prototype.$video=video
Vue.use(BootstrapVue)
Vue.use(Vant)
Vue.use(Lazyload);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Swipe).use(SwipeItem);
axios.defaults.baseURL="http://192.168.14.49:5000"
Vue.component('ItemIcon',ItemIcon)
export default Vue