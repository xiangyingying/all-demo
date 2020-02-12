<template>
        <div class="item">
           <img src="../images/1.png" alt="">
            <div class="detail">
                <p><span class="title">轻易你的名字呼唤我</span></p>
                <p><span class="grade">8.6</span><span class="assess"> (1558人评价)</span></p>
                <p><span class="artist">安德烈·爱西蒙 / 权景 / 中国出版公司 / 2013-9 / 29.80 元</span></p>
            </div>
        </div>
</template>
<script>
export default {
    name:"books",
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
       width: 80px;height: 110px;
       margin-right: 20px;
   }
   .title{
       font-size: 14px;
   }
   .grade{
       color: #FFAC2D;
       font-size: 12px;
   }
   .assess{
     color: #666666;
     font-size: 12px;
   }
   .artist{
       font-size: 13px;
       color: #999999;
   }
</style>