const HTTP=require('../../Models/HTTP')
Page({
  data: {
   musics:[],
   historyWords:[],
   keywords:"",
   searchValue:""
  },
  onLoad:async function (options) {
    var history=wx.getStorageSync("historyWords")
    var historyWords=this.data.historyWords
    var res=await HTTP.getHot();
    var {hots}=res.data.result   
    if(history!=""){
      historyWords=history
    } 
    this.setData({
      musics:hots,
       historyWords 
    })
  },
  handleSubmit(event){
    var keywords=event.detail.value.keyword;
    var historyWords=this.data.historyWords;
    if(this.exist(historyWords,keywords)){
      historyWords.unshift(keywords);
      if(historyWords.length>10){
        historyWords=historyWords.slice(0,10)
      }
    }
    wx.setStorageSync('historyWords', historyWords)
    
    this.setData({
     historyWords,
     searchValue:""
    })
  },
  exist(Arrary,value) {
    var flag =! Arrary.includes(value)
    console.log(flag)
    if (value.trim() == "") {
      return false;
    }
    return flag
  },
})