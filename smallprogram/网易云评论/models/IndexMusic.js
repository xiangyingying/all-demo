const HTTP=require('./HTTP')
class IndexMusic extends HTTP{
    static getMusic(){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"华语"
            }
        })
    }
}
module.exports=IndexMusic