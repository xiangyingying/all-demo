const http=require('../../modules/http')
Page({
  data: {
  },
  
  onLoad: function () {
    http.getCat({cat:"华语"}).then(res=>{
      var {playlists}=res.data
     this.setData({
       playlists
     })
   }) 

  },
  onChange(event){
   var num=event.detail.index;
    switch(num){
      case 0:{
        http.getCat({cat:"华语"}).then(res=>{
          var {playlists}=res.data
          this.setData({
            playlists
          })
        })
      };break;
      case 1:{
        http.getCat({cat:"韩语"}).then(res=>{
          var {playlists}=res.data
          this.setData({
            playlists
          })
        })
      };break;
      case 2:{
        http.getCat({cat:"日语"}).then(res=>{
          var {playlists}=res.data
          this.setData({
            playlists
          })
        })
    };break;
    case 3:{
      http.getCat({cat:"欧美"}).then(res=>{
        var {playlists}=res.data
        this.setData({
          playlists
        })
      })
  };break;
}
}
})
