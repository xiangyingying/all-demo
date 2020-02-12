const HTTP=require('../../models/HTTP')
Page({
  data: {
   movies:[],
   url:""
  },

  onLoad:async function (options) {
    var {index}=options;
    if(index==0){
      var in_theaters=await HTTP.getInTheaters();
      var subjects=in_theaters.data.subjects; 
      var movies=[];
      var url={};
      url.in_theaters={};
      url.in_theaters.subtitle="in_theaters";
      subjects.forEach(item=>{
        var obj={};
        obj.title=item.title;
        obj.images=item.images.small;
        obj.original_title=item.original_title;
        obj.year=item.year;
        obj.name=item.directors[0].name;
        obj.average=item.rating.average
        obj.id=item.id
        obj.subtitle="in_theaters"
        movies.push(obj)
      })
      this.setData({
        movies,
        url
      })
    }else if(index==1){
        var coming_soon=await HTTP.getComingSoon();
        var subjects=coming_soon.data.subjects; 
      var movies=[];
      var url={};
      url.coming_soon={};
      url.coming_soon.subtitle="coming_soon";
      subjects.forEach(item=>{
        var obj={};
        obj.title=item.title;
        obj.images=item.images.small;
        obj.original_title=item.original_title;
        obj.year=item.year;
        obj.name=item.directors[0].name;
        obj.average=item.rating.average
        obj.id=item.id
        obj.subtitle="coming_soon"
        movies.push(obj)
      })
      this.setData({
        movies,
        url
      })
    }else if(index==2){
      var top250=await HTTP.getTop250();
      var subjects=top250.data.subjects; 
      var movies=[];
      var url={};
      url.top250={};
      url.top250.subtitle="top250"
      subjects.forEach(item=>{
        var obj={};
        obj.title=item.title;
        obj.images=item.images.small;
        obj.original_title=item.original_title;
        obj.year=item.year;
        obj.name=item.directors[0].name;
        obj.id=item.id
        obj.average=item.rating.average
        obj.subtitle="top250"
        movies.push(obj)
      })
      this.setData({
        movies,
        url
      })
    }else{
      var getus_box=await HTTP.getus_box();
      var subjects=getus_box.data.subjects; 
      var movies=[];
      var url={}
      url.getus_box={};
      url.getus_box.subtitle="us_box"
      subjects.forEach(item=>{
        var obj={};
        obj.title=item.subject.title;
        obj.images=item.subject.images.small;
        obj.original_title=item.subject.original_title;
        obj.year=item.subject.year;
        obj.name=item.subject.directors[0].name;
        obj.average=item.subject.rating.average;
        obj.id=item.subject.id
        obj.subtitle="us_box"
        movies.push(obj)
      })
      this.setData({
        movies,
        url
      })
    }
    
  },
  handleDetail(event){
    var {subtitle}=event.currentTarget.dataset;
    /* subtitle=JSON.stringify(subtitle) */
    console.log(subtitle)
    wx.navigateTo({
      url: `/pages/movieDetail/movieDtail?subtitle=${subtitle}`,
    })
  }

})