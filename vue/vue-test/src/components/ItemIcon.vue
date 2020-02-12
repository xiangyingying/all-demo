<template>
    <div>
        <div class="item" @click="handleMusic(data.id)">
            <slot name="icon"></slot>
            <img :src="data.coverImgUrl" alt="">
            <p>{{data.name | formatVal()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ItemIcon",
        props:{
            data:{
                type:Object
            }
        },
        methods:{
            handleMusic(id){
                this.$router.push(`/musicDetail?id=${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
        img{
            width: 200px;height: 200px;
        }
        p{
            font-size: 30px;
        }
        .item{
            position: relative;
            margin-top: 20px;
        }
</style>