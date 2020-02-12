<template>
  <div id="app"> 
    <div id="nav">
      <router-link to="/movie">豆瓣电影</router-link> 
    </div>
    <van-loading type="spinner" color="#1989fa" v-if="this.$store.state.isLoading">加载中...</van-loading> 
      <keep-alive>
       <router-view/>
    </keep-alive>  
  </div>
</template>

<style lang="scss">
    #app{
      text-align: center;
      position: relative;
    }
  
</style>
