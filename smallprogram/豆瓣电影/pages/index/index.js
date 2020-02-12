 const http=require('../../utils/http')
Page({
  data: {
   subjects:[],
   start:0
  },
  onLoad:function () {
    http.httpGetmovie(this.data.start).then(res=>{
      console.log(res)
     var {subjects}=res.data;
     /* var movies=[];
     subjects.forEach(item=>{
       var obj={}
       obj.title=item.title;
       obj.img=item.images.small;
       obj.id=item.id
       movies.push(obj)
     }) */

     this.setData({
       subjects
     })
    })   
  },
  onReachBottom(){
    var start=this.data.start;
    var total=250;
    if(start<total){
      start+=10;
      console.log(start)
      http.httpGetmovie(start).then(res=>{
        var {subjects}=res.data;
        this.setData({
          start,
          subjects:this.data.subjects.concat(subjects)
        })
      })
    }else{
      console.log("到达底部")
    }
    
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  }
})