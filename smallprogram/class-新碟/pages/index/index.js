const HotMusic=require('../../models/HotMusic')
Page({
  data: {
   
  },
  onLoad:async function () {
    var HotMusicData=await HotMusic.getHot()
    var {albums}=HotMusicData.data;
    this.setData({
      albums
    })
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset;
    console.log(id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }
})
