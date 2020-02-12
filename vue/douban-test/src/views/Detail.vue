<template>
  <div class="container">
    <div class="container">
        <img :src="imageUrl" alt="">
        <p>{{title}}</p>
        <p>{{summary}}</p>
    </div>
  </div>

</template>
<script>
export default {
  name:"Detail",
  data(){
    return{
      imageUrl:"",
      summary:"",
      title:""
    }
  },
  activated(){
    var id=this.$route.params.id
    this.axios.get(`https://douban-api.now.sh/v2/movie/subject/${id}`).then(res=>{
      this.imageUrl=res.data.images.small
      this.summary=res.data.popular_reviews[0].summary
      this.title=res.data.title
      this.isShow=false
    })
  }
}
</script>
<style >
    .container{
        width: 800px;
        text-align: center;
        margin: 20px auto;
    }
</style>
