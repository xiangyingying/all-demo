<template>
    <div>
        <div class="hot-city">
            <p>热门城市</p>
            <p>北京</p>
        </div>
       <van-index-bar class="van-index">
           <div v-for="(item,index) of cities" :key="index">
                <van-index-anchor :index="index" sticky-offset-top sticky="true" />
                <van-cell :title="value.name" v-for="value of item" :key="value.id" />
            </div>
        </van-index-bar>
    </div>
</template>

<script>
    export default {
        name:"City",
        data() {
            return {
                hotCities:[],
                cities:{}
            }
        },
        mounted() {
            this.axios.get('http://yapi.demo.qunar.com/mock/43104/film').then(res=>{
                this.hotCities=res.data.data.hotCities
                this.cities=res.data.data.cities
            })
        },

    }
</script>

<style scoped> 
      
</style>