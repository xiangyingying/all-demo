var baseUrl="https://music.aityp.com/"
function http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
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
module.exports={
    getAatist:(offset)=>{
        return http({
            url:"top/artists",
            data:{
                offset,
                limit:30
            }
        })
    }
}