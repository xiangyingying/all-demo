const HTTP=require('./HTTP')
class MusicModel extends HTTP{
    static getMusic(offset){
        return this.request({
            url:"top/playlist",
            data:{
                cat:"华语",
                offset,
            }
        })
    }
}
module.exports=MusicModel