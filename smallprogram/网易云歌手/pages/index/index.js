var http=require('../../utils/http')
Page({
  data: {
  offset:0
  },
  onLoad: function () {
   http.getAatist(this.data.offset).then(res=>{
     console.log(res)
     var {artists}=res.data
     console.log(artists)
     this.setData({
       artists
     })
   })
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=30;
    http.getAatist(offset).then(res=>{
      var {artists}=res.data
      console.log(artists)
      this.setData({
        offset,
        artists:this.data.artists.concat(artists)
      })
    })
  }
})
