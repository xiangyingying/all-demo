<template>
    <div class="flex">
        <button @click="handleBack">
            <i class="iconfont icon-fanhui"></i>
        </button>
        <div v-for="(item,index) of playlists" :key="index" class="item" @click="MusicList(item.id)">
            <img :src="item.coverImgUrl"/>
            <div class="name">{{item.name | formatword()}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"MusicMore",
        data(){
            return{
                playlists:[]
            }
        },
        computed:{
            subtitle(){
               return this.$route.query.subtitle
            }
        },
        mounted() {
            var subtitle=this.subtitle
            console.log(subtitle)
            axios.get(`http://192.168.14.15:5000/${this.subtitle}`).then(res=>{
               this.playlists=res.data.playlists 
            })
        },
        methods:{
            MusicList(id){
                this.$router.push(`/musicList?id=${id}`)
            },
            handleBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 100px;height: 100px;
    }
    .name{
        font-size: 20px;color: #7e807f;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly
    }
    .item{
        margin-top: 30px;
    }
    button{
        position: absolute;
        left: 0;
        border: none;
        width: 20px;height: 20px;
        border-radius: 50%;
        z-index: 300;
        background-color: #fff;
        opacity: .6;
}
</style>