
Page({
  data: {
    musics:[],
  },

  onLoad: function(options) {
    var {id}=options;
    console.log(id)
    wx.request({
      url: `https://music.aityp.com/playlist/detail?id=`+id,
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{
        var tracks = res.data.playlist.tracks;
        var musics = []
        tracks.forEach(item=>{
          var min=0;
          if(Math.floor(item.dt/1000/60)<10){
          min="0";
           }
          var sec=0;
          if(Math.floor(item.dt/1000%60)>=10){
           sec="";
           }
          var obj = {};
          obj.name = item.name;
          obj.id = item.id;
          obj.artistName = item.ar[0].name;
          obj.pic=item.al.picUrl;
          obj.time = min+Math.floor(item.dt/1000/60)+":"+sec+Math.floor(item.dt/1000%60);
          obj.musicUrl = item.al.picUrl;
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    });
  },
   handleClick(event){
     var {id,name}=event.currentTarget.dataset
     var pic=escape(event.currentTarget.dataset.pic)
     wx.navigateTo({
       url:'/pages/play/play?id='+id+'&pic='+pic+'&name='+name
     })
   }
})