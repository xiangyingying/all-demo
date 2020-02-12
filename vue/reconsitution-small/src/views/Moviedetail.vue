<template>
    <div>
        <button @click="handleBack">
                <i class="iconfont icon-fanhui"></i>
        </button>
        <div class="top">
            <img :src="movies.images.small" alt="">
            <div class="blur"></div>
        </div>
        <div class="movie-info">
            <div class="title">{{movies.original_title}}</div>
            <div class="year-time">{{movies.countries[0]}} · {{movies.year}}</div>
            <div class="detail-info">
                <span class="num">{{movies.wish_count}}</span>
                <span class="word">人喜欢</span>
                <span class="num">{{movies.comments_count}}</span>
                <span class="word">评论</span>
            </div> 
        </div>
        <img class="pos" :src="movies.images.small" />
        <div class="content">
            <div class="content-title">{{movies.original_title}}</div>
            <div class="score">
                <span>评分</span>
                <img class="start" src="@/assets/images/icon/star.png" />
                <span>{{movies.rating.average}}</span>
            </div>
            <div class="artist">导演<span>{{movies.directors[0].name}}</span></div>
            <div class="artist">影人<span v-for="(item,index) of movies.casts" :key="index">{{item.name}} /</span></div>
            <div class="artist">类型<span v-for="item of movies.tags" :key="item">{{item}}/</span></div>
        </div>
        <div class="introduce">
            <div class="introduce-title">剧情简介</div>
            <div class="introduce-content">{{movies.summary}}</div>
        </div> 
        <div class="actor">影人</div>
        <div class="wrapper">
            <div class="wrapp-img">
                <div class="scroll-item" v-for="item of movies.casts" :key="item.name">
                    <img :src="item.avatars.small">
                    <p>{{item.name}}</p>
                </div>               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Moviedetail",
        data(){
            return{
                movies:Object
            }
        },
          computed:{
            id(){
                return this.$route.query.id
            }
        },
        mounted(){
            var id=this.id
            this.axios.get(`subject/${id}`).then(res=>{
                this.movies=res.data
            })
        },
        methods:{
            handleBack(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
.top img{
    width:100%;height: 200px; 
}
.top{
    position: relative;
}
.top .blur{
    position: absolute;
    width: 100%;
    height: 200px;
    background: rgba(51,51,51,.3);
    left: 0;top: 0;
    backdrop-filter: blur(10px);
}
.movie-info{
    position: absolute;
    top:60px;
    left: 10px;
}
.title{
    color: white;
    font-size:20px;
    letter-spacing: .2em;
}
.year-time{
    color: white;
    margin: 20px 0 30px 0;
}
.detail-info{
    font-size: 16px;
}
.num{
    color: #E32A4E;
    margin-right: 10px;
}
.word{
    color: #655657;
    margin-right: 20px;
}
.pos{
    width: 100px;height:150px;
    position: absolute;
    right: 20px;top:100px;
}
.content{
    width: 95%;
    padding: 30px 10px;
    line-height: 40px;
    font-size: 30rpx;
    color:#CDCDCD ;
    border-bottom: 1px solid #DADADA;
}
.content-title{
    color:#A1A1A1;
    width: 80%;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
}
.artist span,.score span:nth-child(3){
    color:#9F9F9F ;
}
.artist span{
    margin-left: 10px;
}
.score span{
    margin-right: 10px;
}
.introduce-title{
    color:#C5C5C5 ;
    font-size: 20px;
}
.introduce-content{
    color:rgb(131, 131, 131);
    font-size: 18px;
    margin-top: 30px;
}
.introduce{
    border-bottom: 1px solid #DADADA;
    padding: 20px 10px;
    line-height: 30px;
}
.wrapper{
    overflow-x: auto;
    overflow-y: hidden;
}
.wrapper img{
    width: 150px;
    height: 200px;
}
.wrapp-img{
    display: grid;
    grid-template-columns: repeat(5,150px);
    gap: 10px;
}
button{
    position: absolute;
    border: none;
    width: 50px;height: 50px;
    border-radius: 50%;
    z-index: 300;
    background-color: #fff;
    opacity: .6;
}
</style>