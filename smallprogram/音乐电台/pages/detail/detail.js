 const http=require('../../utils/http')
 const audio=wx.getBackgroundAudioManager()
Page({
  data: {
    isPlay:false,
    prevId:""
  },
  onLoad:function (options) {
          http.httpGetDetail(options.id).then(res=>{
            var {program}=res.data;    
            this.setData({
              program
            }) 
            console.log(program) 
          }) 
  } ,
  handlePlay(event){
    var {id,name}=event.currentTarget.dataset;
    http.httpGetMusic(id).then(res=>{
      var musicUrl=res.data.data[0].url
      if(id!=this.data.prevId){
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
    })
    
  } 
})