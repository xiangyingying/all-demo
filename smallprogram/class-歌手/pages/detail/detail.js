const DetailModles=require('../../models/DetailModels')
Page({
  data: {

  },
  onLoad:function (options) {
    DetailModles.getDetail(options.id).then(res=>{
      var {artist,hotSongs}=res.data;
      var ids=hotSongs[0].ar[0].id
      DetailModles.getAlbum(ids).then(res=>{
        console.log(res)
        var {hotAlbums}=res.data
        console.log(hotAlbums)
        this.setData({
          hotAlbums
        })
      })
      this.setData({
        artist,
        hotSongs
      })
    })
  },
  
})