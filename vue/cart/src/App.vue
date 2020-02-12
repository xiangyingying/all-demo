<template>
  <div id="app">
    <div class="list" v-for="(item,index) of products" :key="item.id">
      <van-checkbox  class="select" v-model="item.isSelected"></van-checkbox>
      <van-card 
          :price="item.productPrice"
          :desc="item.productInfo"  
          :title="item.productName"
          :thumb="item.productCover"
        >
      <div slot="footer">
        <van-stepper  v-model="item.productCount" integer />
        <van-button class="delete" size="mini" type="danger" @click="handleDelete(index)">删除</van-button>
      </div>
    </van-card>
    </div>  
     <modal @sure="handleSure" @cancel="handleCancel" v-show="isShow"></modal>  
 <van-submit-bar
  :price="sum*100"
  button-text="提交订单"
>
  <van-checkbox v-model="checkeAll">全选</van-checkbox>
</van-submit-bar>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'app',
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
  mounted(){
    var url='http://yapi.demo.qunar.com/mock/34830/vue'
    this.axios.get(url).then(res=>{
      this.products=res.data
    })
  },
   computed:{
    checkeAll:{
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
      console.log(index)
       this.isShow=!this.isShow
       this.index=index
    },
    handleSure(){
        this.products.splice(this.index,1)
        this.isShow=false
    },
    handleCancel(){
      this.isShow=false
    }
  }
 
}
</script>

<style lang="less" scope>
    .list{
      position: relative;
    }
    .select{
      position: absolute;
      top:30px;
      z-index: 15;
    }
    .delete{
      position: absolute;
      bottom: 70px;
    }
</style>
