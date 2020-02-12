const MusicModel=require('../../models/MusicModel')
Page({

  data: {
   offset:0,
   musics:[],
   isEnd:false
  },
   handleToggle(event){
       var index=event.detail;
       var musics=this.data.musics;
       musics.splice(index,1);
       this.setData({
         musics
       })
   },
  onLoad:async function (options) {
       var res=await MusicModel.getMusic(this.data.offset)
       var playlists=res.data.playlists;
       var musics=[];
       playlists.forEach(item=>{
         var playCount=item.playCount;
         if(playCount>100000000){
           playCount=Math.ceil(playCount/1000000)/100+"亿"
         }else{
           playCount=Math.ceil(playCount/10000)+"万"
         }
         var obj={};
         obj.name=item.name;
         obj.id=item.id;
         obj.cover=item.coverImgUrl;
         obj.playCount=playCount;
         musics.push(obj)
       })
       this.setData({
         musics
       })
  },
  onReachBottom: function () {
    var offset=this.data.offset;
    offset+=50;
    MusicModel.getMusic(offset).then(res=>{
      var playlists=res.data.playlists;
     var musics=[];
     playlists.forEach(item=>{
       var playCount=item.playCount;
       if(playCount>100000000){
         playCount=Math.ceil(playCount/1000000)/100+"亿"
       }else{
         playCount=Math.ceil(playCount/10000)+"万"
       }
       var obj={};
       obj.name=item.name;
       obj.id=item.id;
       obj.cover=item.coverImgUrl;
       obj.playCount=playCount;
       musics.push(obj)
     })
     this.setData({
       musics:this.data.musics.concat(musics)
     })
    })
  },
})