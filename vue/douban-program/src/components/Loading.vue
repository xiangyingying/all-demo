<template>
    <div class="loading">
        <vant-loading></vant-loading>
        <img src="../assets/加载.png" alt="">
    </div>
</template>

<script>
    export default {
        name:"Loading",
      
    }
</script>

<style  scoped>
    .loading{
        position: absolute;
        top: 0;left: 0;
        right: 0;bottom: 0;
    }
</style>