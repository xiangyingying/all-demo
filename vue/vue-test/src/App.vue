<template>
  <div id="app">
    <div id="nav">
      <router-link to="/music">
          <i class="iconfont icon-yinyue"></i>
          <p>音乐</p>
      </router-link>
      <router-link to="/mv">
           <i class="iconfont icon-mv"></i>
           <p>MV</p>
      </router-link>
      <router-link to="/list">
            <i class="iconfont icon-list-copy"></i>
            <p>列表</p>
      </router-link>
      <router-link to="/cart">
            <i class="iconfont icon-gouwuchekong"></i>
            <p>购物车</p>
      </router-link>
      <router-link to="/banner">
            <i class="iconfont icon-lunbo"></i>
            <p>轮播</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"App"
}
</script>
<style lang="less">
      #app{
        width: 10rem;
        margin: 0 auto;
      }
      #nav{
        display: flex;
        font-size: 50px;
        text-align: center;
        position:fixed;
        bottom: 0;
        background: #C20C0C;
        z-index: 100;
        width: 10rem;
        height: 150px;
      }
     #nav i{
       font-size:50px;
     }
     #nav a{
       text-decoration: none;
       padding-left: 30px;
       color: white;
     }
     .router-link-active{
       color: blue!important;
     }
</style>
