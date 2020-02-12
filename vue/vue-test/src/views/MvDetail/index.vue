<template>
    <div class="content">
        <div class="nav">
            <button @click="handleBack"><i class="iconfont icon-fanhui"></i></button>
            <span>网易云MV</span>
        </div>
        <video :src="url" controls preload="auto"></video>
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        name:'MvDetail',
        data(){
            return{
                url:""
            }
        },
        computed:{
            id(){
                return this.$route.query.id
            },
            name(){
                return this.$route.query.name
            }
        },
        mounted() {
            var id=this.id
            this.axios.get(`http://192.168.14.49:5000/mv/url?id=${id}`).then(res=>{
                this.url=res.data.data.url
            })
        },
        methods:{
            handleBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
   .nav{
        height: 100px;
        line-height: 100px;
        background: #C20C0C;
        font-size: 50px;
        color: white
    }
    .nav button{
        border: none;
        background: none;
        outline: none;
    }
    button i{
        color: white;
    }
    video{
        width: 10rem;
    }
    .content{
        position: absolute;
        z-index: 110;
        top: 0;left: 0;
        background: white;
        width: 100%;
        min-height: 100%;
    }
</style>