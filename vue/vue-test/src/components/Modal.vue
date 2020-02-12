<template>
    <div class="container">
        <p>是否删除</p>
        <div>
            <button @click="handleSure">确定</button>
            <button @click="handleCancel">取消</button>
        </div>
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

<style  scoped>
    .container{
        position: absolute;
        top: 120px;left: 0;
        right: -10px;bottom: 0;
        background:white;
        width: 10rem;height: 400px;
    }
    .container p{
        margin-top: 50px;
    }
    .container button{
        margin: 0 50px;
    }
</style>