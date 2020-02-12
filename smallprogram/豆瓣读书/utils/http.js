var baseUrl="https://douban.uieee.com/"
function http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/text'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            error: (err)=>{
                reject(err)
            },
        });
    })
}
module.exports={
    GetSearch:(keyword)=>{
        return http({
            url:"v2/book/search",
            data:{
                q:keyword
            }
        })
    },
    GetDetail:(id)=>{
        return http({
            url:"v2/book/"+id
        })
    }
}