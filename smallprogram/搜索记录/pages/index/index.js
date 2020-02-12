const HTTP=require('../../Models/HTTP')
Page({
  data: {
   books:[]
  },

  onLoad:async function () {
    var res=await HTTP.getHot();
    var {hots}=res.data.result
    this.setData({
      books:hots
    })
  },
  handleClick(e){
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})
