<template>
  <div >
    <van-list class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <router-link :to="'/detail/'+item.id" class="item" v-for="item of subjects" :key="item.id">
           <img :src="item.images.small" alt="">
            <p>{{item.title}}</p>
      </router-link>
    </van-list>    
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data(){
    return{
      subjects:[],
      loading:false,
      finished:false,
      count:20
    }
  },

  mounted(){
    this.axios.get('https://douban-api.zce.now.sh/v2/movie/top250').then(res=>{
       this.subjects=res.data.subjects 
    })
  },
  methods:{
    onLoad(){
      var url=`https://douban-api.zce.now.sh/v2/movie/top250?count=${this.count}&start=${this.subjects.length}`
      this.axios.get(url).then(res=>{
        this.subjects=this.subjects.concat(res.data.subjects)
        this.loading=false       
      })
      if(this.subjects.length>=250){
        this.finished=true;
      }
      
    }
  }

}
</script>
<style scoped>
  .list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 800px;
        margin: 20px auto;
    }
     img{
      width: 170px;height: 220px;
    }
</style>
