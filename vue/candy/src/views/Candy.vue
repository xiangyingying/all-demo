<template>
  <div class="container">
    <h4>堆糖</h4>
    <input type="text" v-model="kw" @keyup.enter="handleSearch(kw)">
   <div class="item" v-for="item of candys" :key="item.id">
      <div class="header">
        <router-link :to="'/detail/'+item.id">
          <img :src="item.avatar" alt="">
        </router-link>       
          <p>{{item.title}}</p>
      </div>  
      <div class="author">{{item.author}}</div>
      <div class="imgs">
        <div v-for="item of item.urls" :key="item">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="commit">
        <span>喜欢：{{item.likes}}</span>
        <span>赞：{{item.collects}}</span>
      </div>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'Candy',
  data(){
    return{
     candys:[],
     kw:'',
     type:"feed"
    }
  },
  mounted(){
    this.axios.get('http://localhost:8080/candy').then(res=>{
      this.candys=res.data.candys
      localStorage.setItem("candys",JSON.stringify(this.candys))
    })
    return JSON.parse(localStorage.getItem("candys"))
  },
  methods:{
    handleSearch(){
       this.$router.push(`/search?kw=${this.kw}&type=${this.type}`)
    },
  
  }

}
</script>
<style>
    .header img{
       width: 50px;height: 50px;
       border-radius: 50%;
       margin: 10px;
    }
    .header{
      display: flex;
    }
    .container{
      width: 500px;
      margin: 50px auto;
      background: #FF5956
    }
    .imgs img{
      width: 150px;height: 150px;
    }
    .imgs{
      display: flex;
      justify-content:space-evenly;
      flex-wrap: wrap;
    }
    .item{
      margin-top: 30px;
      border: 1px solid #eee;
    }
    .author{
      margin: 10px;
    }
    .commit{
      margin: 10px;
    }
    .commit>span{
      margin-right: 20px;
    }
    h4{
      color: pink;
      text-align: center;
      font-size: 40px;
      margin: 20px 0;
    }
    body{
      background: #F2C1BD
    }
    input{
      border-radius: 30px;
      margin-left: 150px;
      border: none;outline: none;
      height: 30px;width: 180px;
      padding-left: 20px;
    }
</style>
