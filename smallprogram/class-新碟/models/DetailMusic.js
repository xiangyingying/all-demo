var HTTP=require('./HTTP')
class DetailMusic extends HTTP{
    static getDetail(id){
        return this.request({
            url:"album",
            data:{
                id
            }
        })
    }
}
module.exports=DetailMusic