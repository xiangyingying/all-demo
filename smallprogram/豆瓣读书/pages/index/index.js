const http=require('../../utils/http')
Page({
  data: {
    books:[]
  },
  
  onLoad: function () {
  },
  handleSubmit(event){
    var keyword=event.detail.value.keyword;
    http.GetSearch(keyword).then(res=>{
      var {books}=res.data;
      var obj={}
      obj.id=res.data.books[0].id;
      books.push(obj)
      /* console.log(id) */
     /*  var searchAbout=`<view class="content-title">搜索"${keyword}"</view>`
      searchBook.append(searchAbout) */
      this.setData({
        books
      })
    })
  },
  handleClick(event){
    var {id}=event.currentTarget.dataset
    console.log(id)
     wx.navigateTo({
       url: '/pages/detail/detail?id='+id,
       
     })
  }
})
