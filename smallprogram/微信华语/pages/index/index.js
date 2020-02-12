Page({
  data: {
    musics:[]
  },
  
  onLoad: function () {
    wx.request({
      url: 'https://music.aityp.com/top/playlist?cat=华语',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        var playlists=res.data.playlists;
        var musics=[];
        playlists.forEach(item=>{
          var obj={};
          obj.imgUrl=item.coverImgUrl;
          obj.name=item.name;
          obj.playCount=Math.floor(item.playCount/10000)+"万";
          obj.nickname=item.creator.nickname;    
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    });
  }
})
