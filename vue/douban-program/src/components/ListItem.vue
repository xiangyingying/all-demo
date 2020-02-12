<template>
    <div>
        <keep-alive>
            <router-link :to="'/detail/'+data.id">
                <div class="item">
                    <img :src="data.images.small" alt="">
                    <p>{{data.title}}</p>
                </div>
            </router-link>
        </keep-alive>  
    </div>
</template>

<script>
    export default {
        name:"ListItem",
        props:{
            data:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style scoped>
    img{
      width: 170px;height: 220px;
    }
   
</style>