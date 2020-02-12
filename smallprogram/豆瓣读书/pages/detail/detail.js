const http=require('../../utils/http')
Page({

  data: {
    books:[]
  },

  onLoad: function (options) {
      http.GetDetail(options.id).then(res=>{
        var {title,author,pubdate,publisher,price,isbn13,binding,pages,translator,summary,author_intro}=res.data
        var obj={};
        var books=[];
        obj.title=title;
        obj.author=author;
        obj.pubdate=pubdate;
        obj.publisher=publisher;
        obj.price=price;
        obj.binding=binding;
        obj.isbn13=isbn13;
        obj.pages=pages;
        obj.translator=translator;
        obj.summary=summary;
        obj.author_intro=author_intro;
        books.push(obj)
        this.setData({
          books
         })
      })

  },

})