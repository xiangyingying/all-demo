const http=require('../../utils/http')
Page({
  data: {
    movies:[]
  },
  onLoad: function (options) {
       http.httpGetDetail(options.id).then(res=>{
         var obj={};
         var movies=[];
         obj.title=res.data.title;
         obj.summary=res.data.summary;
         obj.pic=res.data.images.small;
         obj.year=res.data.year;
         movies.push(obj)
         this.setData({
          movies
        })
       })  
  },
})
/* const http=require('../../utils/http')
Page({

  data: {
    title:"",
    pic:"",
    summary:"",
    year:""
  },

  onLoad: function (options) {
    var {id}=options;
    var title=options.title;
    var pic=unescape(options.pic); 
    this.setData({
      title,
      pic
    })
    http.httpGetDetail(options.id).then(res=>{
      console.log(res)
      var summary=res.data.summary;
      console.log(res)
      console.log(summary)
      this.setData({ 
       summary
      })
    })
  },
}) */
