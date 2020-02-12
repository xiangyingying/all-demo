<template>
  <div>
    <div class="nav">电影合集</div>
    <div class="movie-info">
      <div class="flex">
        <span class="title">正在热映</span>
        <span class="more" @click="handleMore">更多</span>
      </div>
      <div class="list">
        <movie-item class="item" :data="item" v-for="(item,index) of top250" :key="index">
        </movie-item>
      </div>
      <div class="flex">
        <span class="title">即将上映</span>
        <span class="more" @click="handleMore">更多</span>
      </div>
      <div class="list">
        <movie-item class="item" :data="item" v-for="(item,index) of in_theaters" :key="index"></movie-item>
      </div>
      <div class="flex">
        <span class="title">top250</span>
        <span class="more" @click="handleMore">更多</span>
      </div>
      <div class="list">
        <movie-item class="item" :data="item" v-for="(item,index) of coming_soon" :key="index"></movie-item>
      </div>    
    </div>
  </div>
</template>
<script>
import MovieItem from '@/components/MovieItem.vue'
export default {
  name:"Movie",
  data(){
    return{
      top250:[],
      in_theaters:[],
      coming_soon:[],
      
    }
  },
  components:{
    MovieItem
  },
  mounted(){
    this.axios.get('top250').then(res=>{
      this.top250=res.data.subjects.slice(0,3);
    })
    this.axios.get('in_theaters').then(res=>{
      this.in_theaters=res.data.subjects.slice(0,3);
    })
    this.axios.get('coming_soon').then(res=>{
      this.coming_soon=res.data.subjects.slice(0,3);
    })
  },
  methods:{
    handleMore(){
      this.$router.push('movieMore')
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
        .list{
          display: flex;
          flex-wrap: wrap;
        }
        .item{
          margin-left: 20px;
        }
        .movie-info{
          margin-top: 80px;
        }
        .more{
            color: cadetblue
        }
        .flex{
            margin: 20px;
            display: flex;
            justify-content: space-between
        }
        
</style>
