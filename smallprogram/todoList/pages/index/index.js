Page({
  data: {
    arr:[],
  },
  handleSubmit(event){
    var keywords = event.detail.value.keyword;
       var arr=this.data.arr;
       var obj={};
       obj.name=keywords;
       obj.flag=false
       arr.push(obj)
        this.setData({
          arr
        })    
   },
  onLoad: function () {
   
  },
  handleFlag(e){
    var thisIndex=e.target.dataset.index;
    var arr=this.data.arr;
    arr[thisIndex].flag=!(arr[thisIndex].flag);
    this.setData({
      arr,
    })
  },
  handleToggle(event){
    var index=event.target.dataset.index;
    var arr=this.data.arr;
    arr.splice(index,1)
    this.setData({
      arr
    }) 
  }
})
