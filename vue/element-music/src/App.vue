<template>
  <div id="app">
      <div class="container">
         <el-input v-model="keyword" placeholder="请输入歌名" @keyup.enter.native="handleClick(keyword)"></el-input>
         <img :src="songPic" :class="isRotate?'running':'pause'" alt="">
         <p>{{name}}</p>
         <audio :src="musicUrl" controls autoplay @click="isRotate"></audio>
      </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{
      input:'',
      keyword:"成都",
      id:'',
      musicUrl:'',
      name:'',
      songPic:'',
      isRotate:true
    }
  },
  mounted() {
    this.handleClick()
  },
   methods:{
     handleClick(keyword){
       console.log(keyword)
       this.axios.get(`/search?keywords=${this.keyword}`).then(res=>{
       this.id=res.data.result.songs[0].id; 
       this.name=res.data.result.songs[0].name;
       console.log(res.data.result.songs[0].name) 
       
    })
       this.axios.get(`/song/url?id=${this.id}`).then(res=>{
       this.musicUrl=res.data.data[0].url;
    
    })
       this.axios.get(`/song/detail?ids=${this.id}`).then(res=>{
       this.songPic=res.data.songs[0].al.picUrl;      
    }) 
     },
     handlePlay(){
       
     }
   }
}
</script>

<style scoped>
   #app{
      background: #EE8682;
      position: absolute;
      top: 0;left: 0;
      width: 100%;
      min-height: 100%;
    }
    .el-input{
      width: 250px;
    }
    .container{
      width: 450px;
      margin: 80px auto;
      text-align: center;
    }
    img{
      border-radius: 50%;
      margin-top: 10px;
      width: 250px;height: 250px;
    }
    audio{
      outline: none;
    }
    @keyframes rotated{
      0%{
        transform: rotate(0deg)
      }
      100%{
        transform: rotate(360deg)
      }
    }
    .running{
    animation: rotated 7s linear infinite;
    animation-play-state: running;
   }
  .pause{
    animation-play-state: paused;
  }
</style>
