const HTTP=require('./HTTP')
class DetailUtils extends HTTP{
    static getDetail(id){
        return this.request({
            url:"v2/movie/subject/"+id
        })
    }
}
module.exports=DetailUtils