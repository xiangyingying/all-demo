<template>
        <div class="item">
            <div><img :src="data.images.small" alt=""></div>
            <div class="detail">              
                <p class="title"><span class="title-m">{{data.title}} {{data.original_title}} ({{data.year}})</span>
                         <span class="broadcast"> [可播放]</span>
                </p>
                <p class="score"><span class="grade">{{data.rating.average}}</span>
                          <span class="assess">({{data.collect_count}}人评价)</span>
                </p>
                <p class="list"><span>{{data.genres[0]}} / {{data.genres[1]}} / {{data.durations[0]}} </span>       
                </p>
                <p class="list"><span>{{data.directors[0].name}} / {{data.casts[0].name}} / {{data.casts[1].name}} / {{data.casts[2].name}}</span></p>
            </div>
        </div>
</template>
<script>
export default {
    name:"moviesItem",
    props:{
        data:{
            type:Object
        }
    }
}
</script>
<style scoped>
   .item{
       display: flex;
       margin-bottom: 20px;
   }
    img{
        width: 80px;height: 100px;
        margin-top: 20px;
    }
    .detail{
        margin-left: 20px;
    }
    .title-m{
        font-size: 14px;
        color: #3377AA;
    }
    .title-m:hover{
        background: #3377AA;
        color: white;
    }
    .broadcast{
        font-size: 13px;
        color: #00AD3F;
    }
    .score{
        margin-top: 10px;
        font-size: 12px;
    }
    .grade{ 
        color: #FFAC2D;
    }
    .assess{
        color: #666666
    }
    .list{
        color: #999999;
        font-size: 12px;
        line-height: 10px;
    }
</style>