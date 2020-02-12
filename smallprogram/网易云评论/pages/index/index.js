const IndexMusic=require('../../models/IndexMusic')
Page({
  data: {
   
  },
   handleClick(event){
     var {id}=event.currentTarget.dataset;
     var pic=escape(event.currentTarget.dataset.pic)
     console.log(id)
     wx.navigateTo({
       url: '/pages/detail/detail?id='+id+'&pic='+pic,
     })
   },
  onLoad:async function () { 
    var IndexData=await IndexMusic.getMusic();
    var {playlists}=IndexData.data
    this.setData({
      playlists
    })
  }
})
