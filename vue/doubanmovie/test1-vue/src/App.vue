<template>
  <div id="app">
    <moviesItem :data="item" v-for="item of movies" :key="item.id"></moviesItem>
  </div>
</template>
   
<script>
import axios from 'axios-jsonp-pro';
import moviesItem from './components/moviesItem'
import { link } from 'fs';
export default {
  name: 'app',
   data(){
     return{
       msg:"hello world",
       arr:['html','css'],
       movies:[]
     };
   },
   methods:{
     handleClick(){
       this.msg="chart"
     }
   },
   mounted() {
  var url="https://douban-api.uieee.com/v2/movie/top250";
  axios.jsonp(url).then(res=>{
    this.movies=res.subjects;
  })
},
  components:{
    moviesItem
  }
};
</script>

<style>
      #app{
        width: 1000px;
        margin: 30px auto;
    }
</style>
