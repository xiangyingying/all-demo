const http = require('../../utils/http');
Page({
  data: {
    isPlay:false,
    musics:[]
  },
  onLoad: function (options) {
    var {id,name}=options
    console.log(id)
    var pic=unescape(options.pic)
    console.log(pic)
    var nickname=options.nickname
    wx.request({
      url: 'https://music.aityp.com/song/url?id='+id,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
       var data=res.data.data;
       var musics=[];
       data.forEach(item=>{
         var obj={};
         obj.name=name;
         console.log(name)
         obj.nickname=nickname;
         obj.url=item.url;
         obj.pic=pic;
         musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    })
  },
   handlePlay(event){
     this.setData({
       isPlay:!this.data.isPlay
     })
   }
})