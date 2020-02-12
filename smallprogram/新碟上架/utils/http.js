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
            error: (err)=>{
                reject(err)
            }  
        });
    })
}
module.exports={
   getMUsic:(offset)=>{
       return http({
           url:"top/album?limit=30",
           data:{
               offset
           }
       })
   },
   getDetail:(id)=>{
       return http({
           url:"album",
           data:{
               id
           }
       })
   }
}