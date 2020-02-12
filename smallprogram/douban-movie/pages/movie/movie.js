Page({

  data: {
     movies:['正在热映','即将上映','TOP250','北美票房榜']
  },

  onLoad:async function (options) {
     
  },
  handleClick(event){
    var {index}=event.currentTarget.dataset;
      wx.navigateTo({
        url: '/pages/movie-detail/movie-detail?index='+index
      })
  }
})