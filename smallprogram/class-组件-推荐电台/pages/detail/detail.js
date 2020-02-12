const DetailModels=require('../../models/DetailModels')
const audio=wx.getBackgroundAudioManager()
Page({
  data: {
     prevId:"",
     isPlay:false
  },
  onLoad:async function (options) {
      var DetailData = await DetailModels.getDetail(options.id)
      var {program}=DetailData.data;
      console.log(DetailData)
      this.setData({
        program
      })
  },
  async handlePlay(event){
      var {id,name}=event.currentTarget.dataset;
      console.log(id)
      var UrlData=await DetailModels.getUrl(id);
      var musicUrl=UrlData.data.data[0].url;
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
   }
})