<template>
    <div>
        <h4 class="text-center text-primary">轮播图</h4>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index" @click="handleImg(index)">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import {ImagePreview} from 'vant'
    export default {
        name:'Banner',
        data(){
            return{
                images: [
                    require('../../assets/images/banner/01.png'),  
                    require('../../assets/images/banner/02.png'),  
                    require('../../assets/images/banner/03.png'),  
                    require('../../assets/images/banner/04.png'),  
                    require('../../assets/images/banner/05.png')  
                ]
            }
        },
        methods:{
            handleImg(index){
                const instance=ImagePreview({
                    images:this.images,
                    asyncClose:true,
                    startPosition:index,
                    onClose(){
                        instance.close()
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
        img{
            width: 10rem;
        }
</style>