<template>
  <div id="app">
     <books :data="item" v-for="item of movies" :key="item.id"></books>
  </div>
</template>

<script>
import axios from 'axios-jsonp-pro';
import books from './components/books'
export default {
  data(){
    return{
      movies:[]
    }
  },
  name: 'app',
  mounted(){
    var url="https://douban-api.uieee.com/v2/movie/top250";
    axios.jsonp(url).then(res=>{
      console.log(res)
     this.movies=res.subjects;
    })
  },
  components:{
    books
  }
}
</script>

<style>
  #app{
    width: 1000px;
    margin: 30px auto;
  }
</style>