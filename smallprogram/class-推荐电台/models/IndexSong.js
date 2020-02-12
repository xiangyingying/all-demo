const HTTP=require('./HTTP')
class IndexSong extends HTTP{
    static getIndexSong(){
        return this.request({
            url:"program/recommend",
            data:{
                limit:30
            }
        })
    }
}
module.exports=IndexSong