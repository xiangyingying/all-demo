const HTTP=require('./HTTP')
class DetailModels extends HTTP{
    static getDetail(id){
        return this.request({
            url:"artists",
            data:{
                id
            }
        })
    }
    static getAlbum(id){
        return this.request({
            url:"artist/album",
            data:{
                id
            }
        })
    }
}
module.exports=DetailModels