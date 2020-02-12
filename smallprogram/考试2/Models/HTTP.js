var baseUrl="http://192.168.14.49:3200/"
class HTTP{
    static request({url}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data: {},
                header: {'content-type':'application/json'},
                method: 'GET',
                dataType: 'json',
                responseType: 'text',
                success: (res)=>{
                    resolve(res)
                },
                fail: (err)=>{
                    reject(err)
                }
            });
        })
    }
}
module.exports=HTTP