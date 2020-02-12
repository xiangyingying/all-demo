<template>
    <div>
        <music-item title="热门歌曲" :data="hotSongs" :url="titleurl.hotSongs">
            <img class="slot-icon" slot="icon" src="@/assets/images/icons/recmd@2x.png"/>
        </music-item>
        <music-item title="最新音乐" :data="newSongs" :url="titleurl.newSongs">
            <img class="slot-icon" slot="icon" src="@/assets/images/icons/newest@2x.png"/>
        </music-item>
        <music-item title="主播电台" :data="djSongs" :url="titleurl.djSongs">
            <img class="slot-icon" slot="icon" src="@/assets/images/icons/radio@2x.png"/>
        </music-item>
    </div>
</template>

<script>
import axios from 'axios'
import MusicItem from '@/components/MusicItem.vue'
    export default {
        name:"Music",
        data(){
            return{
                hotSongs:[],
                newSongs:[],
                djSongs:[],
                titleurl:{}
            }
        },
        mounted(){   
            axios.get('http://192.168.14.15:5000/top/playlist').then(res=>{
                this.hotSongs=res.data.playlists.slice(0,3);
                this.titleurl.hotSongs={};
                this.titleurl.hotSongs.subtitle="top/playlist?order=hot"
            })
            axios.get('http://192.168.14.15:5000/top/playlist?cat=日语').then(res=>{
               this.newSongs=res.data.playlists.slice(0,3);
               this.titleurl.newSongs={};
               this.titleurl.newSongs.subtitle="top/playlist?cat=日语"
            })
            axios.get('http://192.168.14.15:5000/personalized/djprogram').then(res=>{      
                var songs=[];
                res.data.result.forEach(item=>{
                    var obj={};
                    obj.id=item.id;
                    obj.name=item.name;
                    obj.coverImgUrl=item.picUrl;
                    obj.playCount=item.program.adjustedPlayCount;
                    songs.push(obj)
                    })
                this.djSongs=songs.slice(0,3);
                this.titleurl.djSongs={};
                this.titleurl.djSongs.subtitle="personalized/djprogram";

            })
        },
        components:{
            MusicItem
        }
    }
</script>

<style lang="scss" scoped>
.slot-icon{
    width: 25px;height: 25px;
    vertical-align: bottom;
    margin-right: 10px;
}
</style>