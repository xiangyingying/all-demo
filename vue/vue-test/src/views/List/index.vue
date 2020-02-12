<template>
    <div class="list">
        <div class="item" v-for="(item,index) of playlists" :key="item.id" @click="handleDelete(index)">
            <img :src="item.coverImgUrl" alt="">
            <p>{{item.name | formatVal()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"List",
        data(){
            return{
                playlists:[]
            }
        },
        mounted() {
            this.axios.get('/top/playlist').then(res=>{
                this.playlists=res.data.playlists
            })
        },
        methods:{
            handleDelete(index){
                this.playlists.splice(index,1)
            }
        }
    }
</script>

<style lang="less" scoped>
        p{
            font-size: 30px;
        }
        img{
            width: 200px;height: 200px;
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
        .item:nth-child(even){
            border: 1px solid red;
        }
</style>