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
  onLoad:function () {
    IndexModels.getArtist().then(res=>{
      var {artists}=res.data
      console.log(artists[0].name)
      this.setData({
        artists
      })
     });
     
  }
})
