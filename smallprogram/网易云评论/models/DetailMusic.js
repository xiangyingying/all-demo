const HTTP=require('./HTTP')
class DetailMusic extends HTTP{
    static getDetail(id){
        return this.request({
            url:"playlist/detail",
            data:{
                id
            }
        })
    }
    static getcomment(id){
        return this.request({
            url:"comment/music",
            data:{
                id,
                limit:1
            }
        })
    }
}
module.exports=DetailMusic