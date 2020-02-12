const http=require('../../utils/http')
Page({
  data: {
   albums:[],
   offset:0
  },
  onLoad: function () {
    http.getMUsic(this.data.offset).then(res=>{
      var {albums}=res.data
      this.setData({
        albums
      })
    })
  },
  onReachBottom(){
    var offset=this.data.offset;
    offset+=30;
    http.getMUsic(offset).then(res=>{
      var {albums}=res.data;
      this.setData({
        offset,
        albums:this.data.albums.concat(albums)
      })
    })
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id  
    })
  }
})
