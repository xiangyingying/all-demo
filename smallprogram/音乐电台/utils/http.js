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
            error:(err)=>{
                reject(err)
            }
        });
    }) 
}
module.exports={
    httpGetsong:(limit)=>{
        return http({
            url:"program/recommend",
            data:{
                limit
            }
        })
    },
    httpGetDetail:(id)=>{
        return http({
            url:"dj/program/detail",
            data:{
                id
            }
        })
    },
    httpGetMusic:(id)=>{
        return http({
            url:"song/url",
            data:{
                id
            }
        })
    }
}