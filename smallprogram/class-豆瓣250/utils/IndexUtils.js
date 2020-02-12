const HTTP=require('./HTTP')
class IndexUtils extends HTTP{
    static getMovie({start}){
        return this.request({
            url:"v2/movie/top250",
            data:{
                start
            }
        })
    }
}
module.exports=IndexUtils