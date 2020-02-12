var baseUrl ="https://douban-api.uieee.com/";
function http({type="get",callback,data={}},url){
    $.ajax({
        url:baseUrl+url,
        data,
        type,
        dataType:"jsonp",
        success: function(res) {
            callback(res)
          
        }
    })
}
export default http