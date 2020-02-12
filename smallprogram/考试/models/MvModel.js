const HTTP=require('./HTTP')
class MvModel extends HTTP{
    static getMv(){
        return this.request({
            url:"mv/first"
        })
    }
}
module.exports=MvModel