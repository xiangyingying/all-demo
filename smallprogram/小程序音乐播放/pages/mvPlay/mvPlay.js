const http  = require('../../utils/http.js')
Page({
  data: {
    url:""
  },

  onLoad: function (options) {
    var {id}=options;
    http.getMvUrl(id,res=>{
      this.setData({
        url:res.data.data.url
      })
      console.log(res.data.data.url)
    })
  },
})