const HTTP = require('./HTTP')
class DetailSong extends HTTP{
    static getDetail(id){
        return this.request({
            url:"dj/program/detail",
            data:{
                id
            }
        })
    }
    static getUrl(id){
        return this.request({
            url:"song/url",
            data:{
                id
            }
        })
    }
}
module.exports=DetailSong