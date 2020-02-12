const IndexModels=require('../../models/IndexModels')
Page({
  data: {
    
  },

  onLoad:async function () {
    var IndexData=await IndexModels.getIndex()
    var {results}=IndexData.data;
    console.log(results.Android[0].type)
    this.setData({
      results
    })
  }
})
