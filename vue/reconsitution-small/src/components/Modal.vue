<template>
    <div class="container">
        <div class="btns">
            <button @click="handleSure">确定</button>
            <button @click="handleCancel">取消</button>
        </div>
        <div class="blur"></div>
    </div>
</template>

<script>
    export default {
        name:"Modal",
        methods:{
            handleSure(){
                this.$emit('sure')
            },
            handleCancel(){
                this.$emit('cancel')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container{
        width: 10rem;
        background:white;
        position: absolute;
        top: 0;left: 0;
    }
    button{
        background: none;
        width: 100px;height: 50px;
        margin-left: 30px;
        margin-top: 70px; 
    }
    .btns{
        position: absolute;
        width: 8rem;
        height: 170px;
        background:white;
        z-index: 300;
        top: 200px;
        margin-left: 40px;
    }
    .blur{
        position: absolute;
        z-index: 110;
        top: -20px;left: 0;
        background:#999;
        width: 10rem;
        min-height: 660px;
        font-size: 20px;
        opacity: .5;
    }
</style>