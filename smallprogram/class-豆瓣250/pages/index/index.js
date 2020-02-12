const IndexUtils=require('../../utils/IndexUtils')
Page({
  data: {
  total:"",
  isEnd:false
  },
  
  onLoad:async function () {
    var res=await IndexUtils.getMovie({start:0});
    var {subjects,total}=res.data
    console.log(subjects)
    this.setData({
      subjects,
      total
    })
  },
  onReachBottom(){
    
    var length=this.data.subjects.length;
    console.log(length)
    if(length<this.data.total){
      IndexUtils.getMovie({start:length}).then(res=>{
        var {subjects}=res.data;
        console.log(subjects)
        this.setData({
        subjects:[...this.data.subjects,...subjects]
        })
      })
    }else{
      this.setData({
        isEnd:true
      })
    }
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset;
    wx.navigateTo({
      url:'/pages/detail/detail?id='+id
    })
  }
})
