<template>
  <div id="app">
    <div class="nav">
         <div class="nav-title center">
          <span>ToDoList</span>
          <el-input v-model="keyword" placeholder="添加ToDo" clearable @keyup.enter.native="handleWord(keyword)"></el-input>
        </div>
    </div>
    <div class="to-container">
      <div class="content center">
        <div class="title">
          <p>正在进行</p>
        <span class="num">{{arr.length-sum}}</span>
        </div>
        <div class="list-f" v-for="item of arr" :key="item.index" v-show="!item.checked">
          <el-checkbox v-model="item.checked"></el-checkbox>
          <span>{{item.name}}</span>
          <span class="circle" @click="handleDelete(item)"><span class="min-circle">-</span></span>
        </div>

        <div class="title">
          <p>已经完成</p>
          <span class="num">{{sum}}</span>
        </div>     
        <div class="list-s" v-for="item of arr" :key="item.index" v-show="item.checked">
          <el-checkbox v-model="item.checked"></el-checkbox>
          <span>{{item.name}}</span>
          <span class="circle"  @click="handleDelete(item)"><span class="min-circle">-</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      keyword:'',
      checked:false,
      arr:[],
    }
  },
  computed:{
    sum(){
      var sum =this.arr.filter(item=>item.checked);
      return sum.length
    }
  },
  methods:{
    handleWord(keyword){
      if(this.keyword !=""){
        var arr=this.arr;
        var obj={};
        obj.checked=this.checked;
        obj.name=this.keyword;
        arr.push(obj);
        this.keyword=""
      }
      
    },
    handleDelete(item){
        var arr=this.arr.filter(value=>value!==item)
        this.arr=arr
    }
  },
  updated(){
    localStorage.setItem("arr",JSON.stringify(this.arr))
  },
  mounted(){
    var arr=localStorage.getItem("arr");
    if(arr){
      this.arr=JSON.parse(arr)
    }else{
      localStorage.setItem("arr","[]")
    }
  }
}
</script>

<style scoped>
      .nav{
        height: 50px;
        width: 100%;
        background: #323232;
        color: white;
      }
      .nav-title{
        width: 500px;
        line-height:50px;
        display: flex;
        text-align: center
      }
      .center{
        margin: 0 auto;
      }
      .nav-title span{
        margin-right: 100px;
      }
      .el-input input{
        width: 400px;height: 200px;
      }
      .to-container{
        background: #CDCDCD;
        height: 575px;
      }
      .content{
        width: 500px;
      }
      #app{
        margin: 0;
        position: absolute;
        top: 0;left:0;
        width: 100%;
        min-height: 100%;
      }
      .title>p{
        font-size: 20px;
        font-weight: bold;
        padding-top: 20px;
        margin: 0;
      }
      .title{
        position: relative;
      }
      .num{
        width: 20px;height: 20px;
        display: inline-block;
        border-radius: 50%;
        text-align: center;
        background: #E6E6FA;
        position: absolute;
        top: 25px;right: 10px

      }
      .list-f,.list-s{
        line-height: 30px;
        background: white;
        border-radius: 5px;
        margin-top: 20px;
        position: relative;
      }
      .content .list-f{       
        border-left: 4px solid #629A9C;       
      }
      .content .list-s{     
        border-left: 4px solid #B3B3B3;
        opacity: .5;
      }
      .el-checkbox{
        margin: 0 15px;
      }
      .list span{
        margin-left: 15px;
      }
      .circle{
        width: 20px;height: 20px;
        border: 1px solid#333;      
        right: 10px;
      }
      .min-circle{
        width: 15px;height: 15px;
        background: #CDCDCD;
        right: 2px;
        color: white;
        text-align: center;
        line-height: 10px;
      }
      .circle,.min-circle{
        display: inline-block;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
</style>
