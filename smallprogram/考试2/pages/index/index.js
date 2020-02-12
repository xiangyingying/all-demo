const MusicModel=require('../../Models/IndexModel')
Page({
  data: {
  
  },
  
  onLoad:async function () {
   var res=await MusicModel.getIndex()
   var v_hot=res.data.response.recomPlaylist.data.v_hot; 
   this.setData({
      v_hot
   })
  }
})
