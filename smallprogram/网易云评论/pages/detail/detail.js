const DetailMusic=require('../../models/DetailMusic')
Page({
  data: {

  },
  onLoad:async function (options) {
    var DetailData=await DetailMusic.getDetail(options.id)
    var {playlist}=DetailData.data
    var ids= playlist.tracks[0].id
    var DetailComment=await DetailMusic.getcomment(ids)
    var {hotComments}=DetailComment.data
    console.log(hotComments[0].user.avatarUrl)
    var pic=unescape(options.pic)
    this.setData({
      playlist,
      pic,
      hotComments
    })
  },
})