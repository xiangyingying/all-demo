<template>
  <div id="app">
    <van-tabbar v-model="active">
      <router-link to="/read">
          <van-tabbar-item name="read" class="iconfont icon-read">阅读</van-tabbar-item>
      </router-link>
      <router-link to="/movie">
          <van-tabbar-item name="movie" class="iconfont icon-dianying">电影</van-tabbar-item>
      </router-link>
      <router-link to="/music">
          <van-tabbar-item name="music" class="iconfont icon-yinyue">音乐</van-tabbar-item>
      </router-link> 
      <router-link to="/my">
          <van-tabbar-item name="my" class="iconfont icon-wode">我的</van-tabbar-item>
      </router-link>
      
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      active:0
    }
  }
}
</script>
<style lang="scss" >
#app{
  font-size: 20px;
}
.iconfont::before{
   font-size: 25px;
 }
.van-tabbar-item__text{
   font-size: 14px;
 }
 a .iconfont{
   margin-left: 50px;
 }
.van-tabbar{
   background: white;
   z-index: 100;
   height: 200px;
 }
</style>
