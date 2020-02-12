const http=require('../../utils/http')
Page({
  data: {
  },
  onLoad: function () {
   http.getMusic().then(res=>{
     var {playlists}=res.data;
     var obj={};
     obj.playCount=Math.ceil(res.data.playlists[0].playCount/10000);
     playlists.push(obj)
     console.log(playlists)
     this.setData({
       playlists
     })
   })
  }
})
