<template>
    <div class="container">
        <div class="item" v-for="(item,index) of candys" :key="index">
            <img class="bg" :src="item.imgUrl" alt="">
            <p>{{item.type}}</p>
            <div class="commit">
                <span>赞：{{item.like}}</span><span>收藏：{{item.collect}}</span>
            </div>
            <div class="user">
                <img :src="item.avater" alt="">
                <div class="user-info">
                    <p>{{item.name}}</p>
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Search",
        data(){
            return{
                candys:[]
            }
        },
        computed:{
            kw(){
                return this.$route.query.kw;
            },
            type(){
                return this.$route.query.type
            }
        },
        mounted(){
            var kw=this.kw
            this.axios.get(`http://localhost:8080/candy/search?kw=${kw}&type=feed`).then(res=>{
                this.candys=res.data.candys
            })
        }
    }
</script>

<style scoped>
        .bg{
            width: 200px;
        }
         .container{
            width: 680px;
            margin: 50px auto;
            background: #FF5956;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .item{
            margin-right: 20px;margin-top: 20px;
            border: 1px solid #eee;
            width: 200px;max-height: 700px;
        }
        .user img{
            width: 50px;height: 50px;
            border-radius: 50%;
        }
        body{
            background: #F2C1BD;
        }
        .user{
            display: flex;
            margin-top: 20px;
            align-items: center;
        }
        .user-info{
            margin-left: 10px;
            font-size: 16px;
        }
        .commit span{
            margin-right: 20px;
        }
</style>