<template>
  <div>
    <div class="nav">文与字</div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <img :src="item.imageUrl" />
    </van-swipe-item>
  </van-swipe>
   <!-- 循环内容 -->
   <div class="item" v-for="item of data" :key="item.id" @click="handleDetail(item.postId)">
      <div class="head">
        <img :src="item.avatar" alt="">
        <span>{{item.date}}</span>
      </div>
      <div class="title">{{item.title}}</div>
      <img class="bg" :src="item.imgSrc" alt="">
      <div class="content">{{item.content}}</div>
      <div class="end">
        <img class="icon" src="../assets/images/icon/chat1.png" alt="">
        <span>{{item.collection}}</span>
        <img class="icon" src="../assets/images/icon/view.png" alt="">
        <span>{{item.reading}}</span>
      </div>
   </div>
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro'
export default {
  name: 'Read',
  data() {
    return {
      banners:[],
      data:[]
    }
  },
  mounted(){
    var url='http://192.168.14.15:5000/banner'
     axios.get(url).then(res=>{
      this.banners=res.data.banners;
    })
    this.axios.get('http://yapi.demo.qunar.com/mock/34830/read').then(res=>{
      this.data=res.data.data
    })
  },
  methods:{
    handleDetail(postId){
      console.log(postId)
      this.$router.push(`/readDetail?postId=${postId}`)
    }
  }
}
</script>
<style scoped>
    .nav{
          line-height: 50px;
          width: 100%;
          background: #405F80;
          color: white;
          font-size: 20px;
          text-align: center;
          position: fixed;
          top: 0;
          z-index: 300;
        }
    .van-swipe-item img{
      width: 100%;
      height: 200px;
    }
    .head{
      display: flex;
      align-items: center;
      height: 80rpx;
    }
    .head img{
        width:50px;
        height: 50px;
    }
    .head span{
        font-size: 20px;
        margin-left: 10px;
        color:#666;
    }
    .bg{
        width:100%;
        height: 300px;
    }
    .icon{
        width:20px;
        height: 20px;
    }
    .content{
        font-size: 18px;
        color:#666;
    }
    .title{
        font-size: 25px;
        font-weight: bold;
        color:#333;
        line-height: 60px;
    }
    .end{
        font-size: 20px;
        display: flex;
        align-items: center;
        height: 50px;
        color:#666;
    }
    .end span{
        margin:0 10px;
    }
    .item{
        padding:10px;
        margin-top: 20px;
        background: #fff;
    }
</style>
