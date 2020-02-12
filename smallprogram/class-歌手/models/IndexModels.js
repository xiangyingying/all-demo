const HTTP =require('./HTTP')
class IndexModels extends HTTP{
    static getArtist(){
        return this.request({
            url:"top/artists"
        })
    }
}
module.exports=IndexModels