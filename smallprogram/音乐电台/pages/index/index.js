const http=require('../../utils/http');
Page({
  data: {
    musics:[]
  },
  onLoad:async function () {
    var res=await http.httpGetsong("30")
    var {programs}=res.data
    this.setData({
      programs
    })
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset
    wx.navigateTo({
      url:'/pages/detail/detail?id='+id
    })
  }
  
})
