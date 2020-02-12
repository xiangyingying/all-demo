<template>
    <div class="container">
        <loading v-show="isShow"></loading>
        <img :src="imageUrl" alt="">
        <p>{{title}}</p>
        <p>{{summary}}</p>
    </div>
</template>

<script>
import Loading from '../components/Loading'
    export default {
        name:"Detail",
        components:{
            Loading
        },
        data(){
            return{
                imageUrl:'',
                summary:'',
                isShow:true

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

<style  scoped>
    .container{
        width: 800px;
        text-align: center;
        margin: 20px auto;
    }
</style>