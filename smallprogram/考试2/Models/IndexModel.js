const HTTP=require('./HTTP')
class MusicModel extends HTTP{
    static getIndex(){
        return this.request({
            url:"getRecommend"
        })
    }
}
module.exports=MusicModel