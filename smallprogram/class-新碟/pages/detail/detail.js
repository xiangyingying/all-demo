const DetailMusic=require('../../models/DetailMusic')
Page({
  data: {

  },
  onLoad:async function (options) {
     var DetailMusicData=await DetailMusic.getDetail(options.id)
     var {album}=DetailMusicData.data
     console.log(album)
     this.setData({
       album
     })
  },
})