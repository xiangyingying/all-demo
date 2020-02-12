<template>
    <div class="list">
        <div class="item" v-for="item of mv" :key="item.id" @click="handleMv(item.id,item.name)">
            <img :src="item.cover" alt="">
            <p>{{item.name | formatVal()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Mv',
        data(){
            return{
                mv:[]
            }
        },
        mounted(){
            this.axios.get('/mv/first').then(res=>{
                this.mv=res.data.data
            })
        },
        methods:{
            handleMv(id,name){
                this.$router.push(`/mvDetail?id=${id}&name=${name}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    img{
        width: 200px;height: 200px;
    }
    p{
        font-size:30px;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>