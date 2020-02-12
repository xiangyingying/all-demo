const audio=wx.getBackgroundAudioManager()
Page({
  data: {
    musics:[],
    prevId:"",
    isPlay:false
  },
  onLoad: function () {

  },
  handleSubmit(event){
    var keyword=event.detail.value.keyword;
    wx.request({
      url: `http://192.168.14.49:3000/search?keywords=${keyword}`,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res)=>{     
        var songs=res.data.result.songs;
        var musics=[];
        songs.forEach(item=>{
          var sec=0;
          if(Math.floor(item.duration/1000%60)>=10){
            sec="";
          }
          var min=0;
          if(Math.floor(item.duration/1000/60)<10){
            min="0"
          }
          var obj={};
          obj.name=item.name;
          obj.id=item.id;
          obj.artistName=item.artists[0].name;
          obj.time=min+Math.floor(item.duration/1000/60)+":"+sec+Math.floor(item.duration/1000%60);
          obj.musicUrl=`https://music.163.com/song/media/outer/url?id=${item.id}`
          musics.push(obj)
        })
        this.setData({
          musics
        })
      }
    });
  },
  handlePlay(event){
    var {index}=event.currentTarget.dataset
    var {id,name,musicUrl}=this.data.musics[index];
    if(id!==this.data.prevId){
      audio.title=name;
      audio.src=musicUrl;
      this.setData({
        isPlay:true,
        prevId:id
      })
    }else{
      if(this.data.isPlay){
        audio.pause();
        this.setData({
          isPlay:false
        })
      }else{
        audio.title=name;
        audio.src=musicUrl;
        this.setData({
          isPlay:true
        })
      }
    }
  }
})
