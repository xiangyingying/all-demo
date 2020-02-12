<template>
    <div class="container">
        <div class="wrap">
            <div class="item" v-for="item of musics" :key="item.id">
            <div class="bg">
                <img :src="item.coverUrl" alt="" />
            </div>
            <div class="content">
                <p class="name">{{item.name}}</p>
                <p class="artist">{{item.radio.name}}</p>
            </div>
            <div class="play"><span>播放{{item.listenerCount}}</span><span>赞{{item.likedCount}}</span></div>
            <button>{{item.radio.category}}</button>
        </div>
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
        var url="https://music.aityp.com/program/recommend?limit=30"
        axios.get(url).then(res=>[
            this.musics=res.data.programs
        ])
    }
}
</script>