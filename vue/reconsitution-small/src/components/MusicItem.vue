<template>
    <div>
        <div class="nav">
            <div>
                <slot name="icon"></slot><span>{{title}}</span>
            </div>
            <div class="more" @click="handleMore(url.subtitle)">更多</div>
        </div>
        <div class="container">
            <div v-for="item of data" :key="item.id" @click="MusicList(item.id)">
                <div class="item">
                    <div class="cover">
                        <div class="play-count">
                            <img src="@/assets/images/p0.png" />{{item.playCount}}
                        </div>
                        <img :src="item.coverImgUrl"/>
                    </div>
                    <span>{{item.name | formatword()}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:""
            }
        },
        props:{
            data:{
                type:Array
            },
          url:{
              type:Object
          },
        },
        methods:{
            MusicList(id){
                this.$router.push(`/musicList?id=${id}`)
            },
            handleMore(subtitle){
                this.$router.push(`/musicMore?subtitle=${subtitle}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .play-count img{
        width:20px;
        height: 20px;
    }
    .cover>img{
        width:100px;
        height: 100px;
    }
    .item{
        width:100px;
        position: relative;
        font-size: 20px;
    }
    .play-count{
        position: absolute;
        right:0;
        top:5px;
        color:#fff;
        font-size: 18px;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .nav{
        font-size: 20px;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        padding:20px;
    }
</style>