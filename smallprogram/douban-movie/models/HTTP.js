var baseUrl="https://douban.uieee.com/v2/movie/"
function HTTP({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            data,
            header: {'content-type':'json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            },
        });
    })
}
module.exports={
    getTop250:()=>{
        return HTTP({
            url:"top250"
        })
    },
    getInTheaters:()=>{
        return HTTP({
            url:"in_theaters"
        })
    },
    getComingSoon:()=>{
        return HTTP({
            url:"coming_soon"
        })
    },
    getus_box:()=>{
         return HTTP({
             url:"us_box"
         })
    },
    getUrl:(subtitle)=>{
        return HTTP({
            url:subtitle
        })
    },
    getDetail:(id)=>{
        return HTTP({
            url:`subject/${id}`
        })
    }
}