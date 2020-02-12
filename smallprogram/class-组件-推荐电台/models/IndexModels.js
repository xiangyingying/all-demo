const HTTP=require('./HTTP')
class IndexModels extends HTTP{
    static getSong(){
        return this.request({
            url:"program/recommend"
        })
    }
}
module.exports=IndexModels