<template>
    <div>
        <div class="item" @click="handleDetail(data.id)">
            <img class="bg" :src="data.images.small" alt="">
            <div class="name">{{data.title | formatword()}}</div>
            <div class="start">
                <img  src="@/assets/images/icon/star.png" alt="">               
                <span class="rating">{{data.rating.average}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"MovieItem",
        props:{
            data:{
                type:Object
            }
        },
        methods:{
            handleDetail(id){
                this.$router.push(`/MovieDetail?id=${id}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bg{
        width: 100px;height: 100px;
    }
    .item{
        width: 100px;
    }
    .start image{
        width: 35px;height: 35px;
    }
    .name{
        font-size: 20px;
    }
    .rating{
        font-size: 18px;
    }
</style>