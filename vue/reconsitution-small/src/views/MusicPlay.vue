<template>
    <div class="container">
        <img :src="pic"/>
        <div class="item" 
        >
            <img class="shou" :class="isPlay?'move':'unmove'" src="@/assets/images/shou.png"/>
            <img class="pan" :class="isPlay?'running':'pause'" src="@/assets/images/pan.png"/>
            <img class="item-bg" :class="isPlay?'running':'pause'" :src="pic"/>
            <div class="lyric">{{name}}</div>
            <img class="play" :src="isPlay?require('@/assets/images/播放.png'):require('@/assets/images/暂停.png')" @click="handlePlay"/>
            <audio :src="url" ref="audio" autoplay @play="onPlay" @pause="onPause"></audio>
            <button class="back" @click="handleBack">vConsole</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                isPlay:false,
                url:""
            }
        },
        computed:{
            id(){
                return this.$route.query.id
            },
            pic(){
                return this.$route.query.pic
            },
            name(){
                return this.$route.query.name
            }
        },
        methods:{
            handleBack(){
                this.$router.back();
            },
            handlePlay(){
                if(this.isPlay){
                    this.isPlay=false,
                    this.$refs.audio.pause()
                }else{
                    this.isPlay=true,
                    this.$refs.audio.play()
                }
            },
            onPlay(){
                this.isPlay=true
            },
            onPause(){
                this.isPlay=false
            },
        },
        mounted() {
            axios.get(`http://192.168.14.15:5000/song/url?id=${this.id}`).then(res=>{
                this.url=res.data.data[0].url
            })
        },
    }
</script>

<style lang="scss" scoped>
.container>img{
    width: 100%;height: 100%;
    position: fixed;
    opacity: 0.5;
}
.item{
    width: 300px;
    margin-right: auto;margin-left: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
}
.shou{
    width: 150px;height: 250px;
    top: 0;left: 100px;
    position: absolute;
    z-index: 100;
    transform: rotate(-25deg);
    transform-origin: 25px 25px;
}
@keyframes animated{
    0%{
        transform: rotate(0deg)
    }
    50%{
        transform: rotate(180deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
.running{
    animation: animated 3s linear infinite;
    animation-play-state: running; 
}
.pause{
    animation-play-state: paused;
}
@keyframes move{
    0%{
        transform: rotate(-30deg)
    }
    100%{
        transform: rotate(0deg)
    }
}
@keyframes unmove{
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(-30deg)
    }
}
.move{
    animation: move 2s forwards;
}
.unmove{
    animation: unmove 2s forwards;
}
.pan{
    width: 300px;height: 300px;
    margin-top: 150px;
}
.item-bg{
    width: 150px;height: 150px;
    position: absolute;
    top: 27%;left: 25%;
    border-radius: 50%;
}
.lyric{
    color: black;
    padding: 50px;
    font-size: 24px;
    margin-left: 50px;
}
.play{
    width: 60px;height: 60px;
    background: white;
    margin-left: 110px;
    border-radius: 50%;
}
.back{
    background: green;
    width: 100px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    color: white;
    border: none;
    margin:20px 0 100px 200px;
}

</style>