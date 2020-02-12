import Vue from 'vue'
import axios from 'axios'
import "amfe-flexible/index.js"
import 'vant/lib/index.css'
import {Swipe,SwipeItem} from 'vant'
import { Lazyload } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import BaiduMap from 'vue-baidu-map'
import VueAMap from 'vue-amap';
import MovieItem from '@/components/MovieItem.vue'
Vue.filter('formatStar',function(value){
    if(value){
        value=value.substring(0,1);
        var arr=[]
        for(var i=1;i<=5;i++){
         if(i<=value){
             arr.push(1)
         }else{
             arr.push(0)
         }
        }
        return arr
    }   
    
})
Vue.filter('formatword',function(val){
    if(val.length>4){
        val=val.slice(0,4)+"..."
    }
    return val
})
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabbar).use(TabbarItem);
Vue.prototype.axios=axios;
Vue.component('MovieItem',MovieItem);
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'bFHYFWRyGwAerAGG01mzSmKl2NftyujF'
  })
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    key: 'bFHYFWRyGwAerAGG01mzSmKl2NftyujF',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  });
axios.defaults.baseURL='https://douban.uieee.com/v2/movie/'
export default Vue