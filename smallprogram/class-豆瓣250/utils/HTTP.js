var baseUrl="https://douban.uieee.com/"
class HTTP{
    static request({url,data,method="GET"}){
        return new Promise((resolve,reject)=>{
            wx.request({
                url: baseUrl+url,
                data,
                header: {'content-type':'json'},
                method,
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