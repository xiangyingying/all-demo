<template>
  <div class="list">
      <loading v-show="isShow"></loading>
      <list-item :data="item" v-for="item of subjects" :key="item.id"></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'    
import Loading from '../components/Loading'
export default {
  name: 'home',
  components:{
    ListItem,
    Loading
  },
  data(){
    return{
      subjects:[],
      total:"1000",
      start:'',
      isShow:true
    }
  },
  mounted(){
     this.axios.get('https://douban-api.zce.now.sh/v2/movie/top250').then(res=>{
       this.subjects=res.data.subjects
       localStorage.setItem("data",JSON.stringify(this.subjects))
       this.isShow=false
    }) 
    this.getDate()
  },
  methods: {
  getDate () {
    var data=JSON.parse(localStorage.getItem("data"))
    var length=data.length;
    console.log(length)
    if(length<this.total){
      this.axios.get('https://douban-api.zce.now.sh/v2/movie/top250').then(res=>{
        this.subjects=res.data.subjects
        console.log(this.subjects)
        this.start=length
      })
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
</style>
