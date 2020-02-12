const http=require('../../utils/http')
Page({
  data: {

  },
  onLoad: function (options) {
     http.getMv().then(res=>{
       var {data}=res.data
       this.setData({
         data
       })
     })
  },

})