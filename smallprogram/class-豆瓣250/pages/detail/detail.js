const DetailUtils=require('../../utils/DetailUtils')
Page({
  data: {
      movies:[]
  },

  onLoad:async function (options) {
    var res = await DetailUtils.getDetail(options.id);
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
  },

})