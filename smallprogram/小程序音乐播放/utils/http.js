var baseUrl ="https://music.aityp.com/"
function http({url,data,success}){
    wx.request({
        url: baseUrl+url,
        data,
        header: {'content-type':'application/json'},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: (res)=>{
           success(res)
        }
    });
}
// module.exports = http;
module.exports = {
    getMvData:(callback)=>{
        http({
            url:'mv/first',
            success:res=>{
                callback(res)
            }
        })
    },
    getMvUrl:(id,callback)=>{
        http({
            url:`mv/url?id=${id}`,
            success:res=>{
                callback(res)
            }
        })
    }
}