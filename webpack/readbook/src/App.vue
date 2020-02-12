<template>
    <div class="container">
        <div class="item" v-for="item of artists" :key="item.id">
            <img :src="item.picUrl" alt="" />
            <div class="name">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {  
    name:"App",
    data(){
        return{
            artists:[]
        }
    },
    mounted(){
        var url="https://music.aityp.com/top/artists";
        axios.get(url).then(res=>{
            this.artists=res.data.artists
            console.log(this.artists[0].name)
        })
    }
}
</script>