const HTTP=require('./HTTP')
class HotMusic extends HTTP{
    static getHot(){
        return this.request({
            url:"top/album"
        })
    }
}
module.exports=HotMusic