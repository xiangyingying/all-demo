<template>
    <div class="container">
        <button @click="handleBack">
            <i class="iconfont icon-fanhui"></i>
        </button>
        <img  :src="playlist.coverImgUrl"/>
        <div class="title">播放列表</div>
        <div class="item" v-for="item of playlist.tracks" :key="item.id">
            <div class="bg">
                <img :src="item.al.picUrl"/>
            </div>
            <div class="nickname">{{item.name}}</div>
            <div class="play" @click="handlePlay(item.al.picUrl,item.name,item.id)" >
                <img :src="isPlay?require('@/assets/images/icons/play.png'):require('@/assets/images/icons/pause.png')" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"MusicList",
        data() {
            return {
                playlist:{},
                isPlay:false
            }
        },
        computed:{
            id(){
                return this.$route.query.id
            },
        },
        mounted(){
            axios.get(`http://192.168.14.15:5000/playlist/detail?id=${this.id}`).then(res=>{
                this.playlist=res.data.playlist
            })
        },
        methods:{
            handlePlay(pic,name,id){
                if(this.isPlay){
                    this.$router.push(`/musicPlay?id=${id}&pic=${pic}&name=${name}`);
                    this.isPlay=true
                }
            },
            handleBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg img{
    width: 80px;height: 80px;
}
.play img{
    width:50px;height: 50px;
}
.item{
    display: flex;
    padding: 10px 10px;
    border-bottom: 1px solid #eee;
    align-items: center;
}
.bg{
    width:100px;
}
.nickname{
    font-size: 20px;
    width: 200px;
}
.title{
    line-height: 50px;
    padding-left: 30px;
    background: #EFEFEF;
}
.container>img{
    width: 100%;height: 200px;
    height: 200px;
}
button{
    position: absolute;
    border: none;
    width: 50px;height: 50px;
    border-radius: 50%;
    z-index: 300;
    background-color: #fff;
    opacity: .6;
}
</style>