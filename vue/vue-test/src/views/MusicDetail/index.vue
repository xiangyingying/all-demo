<template>
    <div>
        <div class="item">
            <div class="nav">
                <button @click="handleBack"><i class="iconfont icon-fanhui"></i></button>
                <span>推荐</span>
            </div>
            <div class="content" v-for="(item,index) of tracks" :key="item.id">
                <div class="num">{{index+1}}</div>
                <div class="bg">
                    <img :src="item.al.picUrl" alt="">
                </div>
                <div class="info">
                    <div class="name">{{item.name | formatVal()}}</div>
                    <div class="artist">by：{{item.al.name | formatVal()}}</div>
                </div>
                <div class="time">{{item.dt | formatTime()}}</div>
                <img @click="handlePlay" :src="isPlay?require('@/assets/images/pause.png'):require('@/assets/images/play.png')" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MusicDetail',
        data(){
            return{
                tracks:[],
                isPlay:false
            }
        },
        computed:{
            id(){
                return this.$route.query.id
            }
        },
        methods:{
            handleBack(){
                this.$router.back()
            },
            handlePlay(){
                this.isPlay=!this.isPlay
            }
        },
        mounted(){
            var id=this.id
            this.axios.get(`http://192.168.14.49:5000/playlist/detail?id=${id}`).then(res=>{
                this.tracks=res.data.playlist.tracks
            })
        }
    }
</script>

<style lang="less" scoped>
    .nav{
        height: 100px;
        line-height: 100px;
        background: #C20C0C;
        font-size: 50px;
        color: white
    }
    .nav button{
        border: none;
        background: none;
        outline: none;
    }
    button i{
        color: white;
    }
    .nav span{
        margin-left: 250px;
    }
    .item{
        position: absolute;
        top: 0;left: 0;
        width: 100%;
        min-height: 100%;
        background: white;
        font-size: 50px;
        z-index: 110;
    }
    .bg img{
        width: 170px;height: 170px;
    }
    .content{
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .num{
        width: 50px;color: #C20C0C;
    }
    .bg{
        margin: 0 20px;
    }
    .info{
        width: 300px;
    }
    .time{
        width: 50px;
        margin-right: 100px;
    }
</style>