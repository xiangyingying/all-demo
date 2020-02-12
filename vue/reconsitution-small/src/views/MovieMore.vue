<template>
    <div class="list">
        <movie-item class="item" :data="item" v-for="(item,index) of coming_soon" :key="index"></movie-item>
    </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'
    export default {
        name:"MovieMore",
         components:{
            MovieItem
        },
        data(){
            return{
                top250:[],
                in_theaters:[],
                coming_soon:[]
            }
        },
        mounted(){
            this.axios.get('top250').then(res=>{
            this.top250=res.data.subjects;
            })
            this.axios.get('in_theaters').then(res=>{
            this.in_theaters=res.data.subjects;
            })
            this.axios.get('coming_soon').then(res=>{
            this.coming_soon=res.data.subjects;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .list{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly
        }
    .item{
        margin-top: 20px;
    }
</style>