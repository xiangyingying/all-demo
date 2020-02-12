const DetailSong=require('../../models/DetailSong')
const audio=wx.getBackgroundAudioManager()
Page({
  data: {
     isPlay:false,
     prevId:""
  },
  handlePlay(event){
    var {id,name}=event.currentTarget.dataset;
    DetailSong.getUrl(id).then(res=>{
      var musicUrl=res.data.data[0].url;
      if(id!=this.data.prevId){
        audio.title=name;
        audio.src=musicUrl;
        this.setData({
          prevId:id,
          isPlay:true
        })
      }else{
        if(this.data.isPlay){
          audio.pause();
          this.setData({
            isPlay:false
          })
        }else{
          audio.title=name;
          audio.src=musicUrl
          this.setData({
            isPlay:true
          })
        }
      }
    })
 },
  onLoad:async function (options) {
    console.log(options.id)
     var DetailData=await DetailSong.getDetail(options.id)
     var {program}=DetailData.data
     this.setData({
       program
     })
  },
})