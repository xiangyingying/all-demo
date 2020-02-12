<template>
    <div class="container">
        <div class="item" v-for="item of musics" :key="item.id">
            <img :src="item.blurPicUrl" />
            <div class="name">{{item.name}}</div>
            <div class="artist">{{item.artist.name}}</div>
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
        var url="https://music.aityp.com/top/album";
        axios.get(url).then(res=>{
            this.musics=res.data.albums
        })
    }
}
</script>