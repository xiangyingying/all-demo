<template>
        <div class="container">
            <div class="item" v-for="item of musics" :key="item.id">
                <img :src="item.images.small">
                <p>{{item.title}}</p>
            </div>  
        </div>
</template> 
<script>
import axios from 'axios'
export default {
    name:"App",
    data(){
        return{
            musics:[]
        }
    },
    mounted(){
        var url="https://douban-api.now.sh/v2/movie/top250";
        axios.get(url).then(res=>{
            this.musics=res.data.subjects
            console.log(res.data.subjects)
        })
    }
}
</script>
<style scoped>
    
</style>