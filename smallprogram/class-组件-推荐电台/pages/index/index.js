const IndexModels=require('../../models/IndexModels')
Page({
  data: {
  
  },
   handleClick(event){
      var {id}=event.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/detail/detail?id='+id,
      })
   },
  onLoad:async function () {
    var indexData=await IndexModels.getSong()
    console.log(indexData)
    var {programs}=indexData.data
    this.setData({
      programs
    })
  }
})
