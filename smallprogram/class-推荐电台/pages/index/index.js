const IndexSong=require('../../models/IndexSong')
Page({
  data: {
  },
   handleClick(event){
     var {id}=event.currentTarget.dataset;
     console.log(id)
     wx.navigateTo({
       url: '/pages/detail/detail?id='+id,
     })
   },
  onLoad:async function () {
    var IndexData=await IndexSong.getIndexSong()
    var {programs}=IndexData.data
    this.setData({
      programs
    })
  }
})
