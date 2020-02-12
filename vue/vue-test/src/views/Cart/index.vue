<template>
    <div class="tab">
        <h6 class="text-center text-success">购物车</h6>
        <table>
            <thead>
                <th>全选<input type="checkbox" v-model="checkAll"></th>
                <th>商品</th>
                <th>单价</th>
                <th>数量</th>
                <th>总价</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) of products" :key="item.id">
                    <td>
                        <input type="checkbox" v-model="item.isSelected">
                    </td>
                    <td class="name">
                        <img :src="item.productCover" alt="">
                        <p>{{item.productName}}</p>
                    </td>
                    <td>{{item.productPrice | format(2)}}</td>
                    <td class="num">
                        <input v-model.number="item.productCount" type="number" step="1" />
                    </td>
                    <td>{{item.productPrice*item.productCount | format(2)}}</td>
                    <td>
                        <modal :index="index" v-show="isShow" @sure="handleSure" @cancel="handleCancel"></modal>
                        <button @click="handleDelete(index)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
         <p>总价：{{sum | format(2)}}</p>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
    export default {
        name:"Cart",
        components:{
            Modal
        },
        data(){
            return{
                products:[],
                isShow:false,
                index:''
            }
        },
        mounted() {
            this.axios.get('http://yapi.demo.qunar.com/mock/34830/vue').then(res=>{
                this.products=res.data
            })
        },
        filters:{
            format(val,params){
                return "$"+val.toFixed(params)
            }
        },
         computed:{
            checkAll:{
                get(){
                    return this.products.every(item=>item.isSelected)
                },
                set(val){
                    this.products.forEach(item=>item.isSelected=val)
                }
            }, 
            sum(){
                var total=0;
                this.products.forEach(item=>{
                    total=item.productCount*item.productPrice+total;
                })
                return total
            }
        },
        methods:{       
            handleDelete(index){
                this.isShow=!this.isShow
                this.index=index
            },
            handleCancel(){
                this.isShow=false
            },
            handleSure(){
               this.products.splice(this.index,1)
                this.isShow=false
            }
        }
    }
</script>

<style lang="less" scoped>
        .tab>p{
            font-size: 60px;
        }
        th{
            font-size: 40px;
        }
        td,th{
            text-align: center;
        }
        img{
            width: 150px;height: 150px;
        }
        .num input{
            width: 80px;
        }
        button{
            width: 110px;
            height: 100px;
            border: none;
            border-radius: 3px;
            color: white;
            background: red;
            outline: none;
        }
        tbody{
            font-size: 40px;
        }
        thead th:nth-child(1){
            display: flex;
            align-items: center;
            width: 1.66667rem;
        }
        .name{
            font-size: 35px;
        }
</style>