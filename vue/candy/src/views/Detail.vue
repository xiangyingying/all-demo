<template>
    <div class="container">
        <div class="item">
        <div class="header">
            <img :src="data.avater" alt="">      
            <p>{{data.title}}</p>
            <p>{{data.creatTime}}</p>
        </div>  
        <div class="author">{{data.desc}}</div>
        <div class="imgs">
            <div v-for="item of data.coverImgUrl" :key="item">
            <img :src="item" alt="">
            </div>
        </div>
        <div class="commit">
            <span>喜欢：{{data.liked}}</span>
            <span>赞：{{data.collection}}</span>
      </div>
    </div> 
    </div>
</template>

<script>
    export default {
        name:"Detail",
        data(){
            return{
                data:""
            }
        },
        mounted(){
            var id=this.$route.params.id
            this.axios.get(`http://localhost:8080/candy/detail?id=${id}`).then(res=>{
                this.data=res.data
            })
        }
    }
</script>

<style  scoped>
    .container{
      width: 500px;
      margin: 50px auto;
      background: #FF5956
    }
</style>