const HTTP=require('./HTTP')
class IndexModels extends HTTP{
    static getIndex(){
        return this.request({
            url:"api/today"
        })
    }
}
module.exports=IndexModels