<template>
    <div class="list">
        <item-icon :data="item" v-for="item of playlists" :key="item.id">
            <div class="icon" slot="icon">
                <img src="@/assets/images/p0.png" alt="">{{item.playCount | formatPly()}}
            </div>
        </item-icon>
    </div>
</template>

<script>
import ItemIcon from '@/components/ItemIcon.vue'
    export default {
        name:'Music',
        data(){
            return{
                playlists:[]
            }
        },
        components:{
            ItemIcon
        },
        mounted(){
            this.axios.get('/top/playlist').then(res=>{
                this.playlists=res.data.playlists;
            })
        },
    }
</script>

<style lang="less" scoped>
        .list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly
        }
        img{
            width: 50px;height: 50px;
        }
        .icon{
            position: absolute;
            top: 3px;right: 30px;
            font-size: 20px;
            color: white;
        }
        
</style>