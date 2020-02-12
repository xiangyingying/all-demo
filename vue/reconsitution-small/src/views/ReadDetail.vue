<template>
    <div class="cover">
        <div class="item">
            <button @click="handleBack">
                <i class="iconfont icon-fanhui"></i>
            </button>
            <img class="bg" :src="item.imgSrc" alt="">
            <img class="music-pic" @click="handlePlay" :src="isPlay?require('@/assets/images/music/music-stop.png'):require('@/assets/images/music/music-start.png')" alt=""/>
            <audio @play="onPlay" hidden @pause="onPause" :src="playUrl" controls ref="audio"></audio>
            <div class="container">
                <div class="list">
                    <img class="user-img" :src="item.avatar" alt="">
                    <span class="author">{{item.author}}</span>
                    <span class="show">发表于</span>
                    <span>{{item.dateTime}}</span>
                </div>
                <div class="title">{{item.title}}</div>
                <div class="collect">
                    <div class="hr"></div>
                    <img @click="handleToggle(0)" :src="isColl?require('../assets/images/icon/collection.png'):require('../assets/images/icon/collection-anti.png')" alt="">
                    <img @click="handleToggle(1)" :src="isShare?require('../assets/images/icon/share.png'):require('../assets/images/icon/share-anti.png')" alt="">
                </div>
                <div class="introduction">
                    <div>1 引言</div>
                    <div class="content">{{item.content}}</div>
                </div>
            </div>
        </div>
        <modal v-show="isShow" @sure="handleSure" @cancel="handleCancel"></modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
    export default {
        name:"ReadDetail",
        components:{
            Modal
        },
        data(){
            return{
                item:[],
                isPlay:false,
                title:'',
                playUrl:'',
                isShow:false,
                isShare:false,
                isColl:false,
                index:0
            }
        },
        computed:{
            postId(){
                return this.$route.query.postId
            }
        },
        mounted(){
            this.axios.get('http://yapi.demo.qunar.com/mock/34830/read').then(res=>{
                this.data=res.data.data
                this.item=this.data[this.postId]
                this.playUrl=this.data[this.postId].music.url
            })
        },
        methods:{
            handlePlay(){
                if(this.isPlay){
                    this.$refs.audio.pause()
                    this.isPlay=false
                }else{
                    this.$refs.audio.play()
                    this.isPlay=true
                }  
            },
            /* 监听音乐播放 */
            onPlay(){
                this.isPlay=true
            },
            /* 监听音乐暂停 */
            onPause(){
                this.isPlay=false
            },
            handleToggle(index){
                if(index==0){
                    this.isColl=!this.isColl
                    this.isShow=!this.isShow
                }else{
                    this.isShare=!this.isShare
                    this.isShow=!this.isShow
                }              
            },
            handleSure(){
                this.isShow=false
            },
            handleCancel(){
                this.isShow=false
            },
            handleBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
.bg{
    width: 100%;height: 200px;
    opacity: .3;
}
.music-pic{
    width: 50px;height: 50px;
    position: absolute;
    top: 10%;left: 50%;
    z-index: 100;
    transform: translate(-50%,-10%);
}
.user-img{
    width: 50px;height: 50px;
}
.list{
    display: flex;
    align-items: center;
    margin: 20px;
    color:#A8A8A8;
}
.list .author{
    color: #828282;
    margin: 0 5px;
}
.show{
    margin-top: 10px;
    margin-right: 20px;
    font-size: 20px;
}
.title{
    font-weight: bold;
    margin-bottom: 50px;
    color: #4D576E;
    letter-spacing: .2em;
}
.container{
    width:97%;
    margin: 20px auto;
}
.introduction{
    color: #848484;
    margin-top: 50px;
}
.introduction>view{
    margin-top: 20px;
    letter-spacing: .1em;
}
.collect img{
    width: 50px;height: 50px;  
    float: left;
}
.collect img:nth-of-type(2){
    margin-left: 240px;
    margin-top: -50px;
}
.collect img:nth-of-type(1){
    margin-left: 300px;
    margin-top: -30px;
}
.hr{
    width: 95%;
    border: 1px solid #eee;
}
.cover{
    position: absolute;
    z-index: 110;
    top: 0;left: 0;
    background: white;
    width: 100%;
    min-height: 100%;
    font-size: 20px;
}
.item>button{
    position: absolute;
    border: none;
    width: 50px;height: 50px;
    border-radius: 50%;
    z-index: 300;
    background-color: #fff;
    opacity: .6;
}
</style>