Page({
  data: {
    musics:[]
  },
  onLoad: function () {
    wx.request({
      url: 'https://music.aityp.com/program/recommend?limit=30',
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        var programs=res.data.programs;
        var musics = []
        programs.forEach(item=>{
          var obj={};
          obj.blurCoverUrl=item.blurCoverUrl
          obj.name=item.mainSong.name;
          obj.artists=item.radio.name;
          obj.listenerCount=item.listenerCount;
          obj.likedCount=item.likedCount;
          obj.category=item.radio.category;
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    });
  }
})
