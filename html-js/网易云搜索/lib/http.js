/* var url ="https://douban-api.uieee.com/v2/movie/top250";
function http({type="get",callback,data={}}){
    $.ajax({
        url,
        data,
        type,
        dataType:"jsonp",
        success: function(res) {
            callback(res)
            $("#loading").hide()
        },
        beforeSend(){
            $("#loading").show()
        }
    })
}
function onReachBottom(){
    var dh = $(document).height();
    var sh = $(window).scrollTop();
    var wh = $(window).height();
    return (Math.ceil(sh + wh) == dh) ? true : false;
} */

var url="http://192.168.14.49:3000/search"
function http({type="get",callback,data}){
    $.ajax({
        url:`${url}?keywords=${data.value}&limit=10`,
        type,       
        dataType:"json",
        success:res=>{
            callback(res)
        },
        beforeSend(){
            $("#songs-list").children().remove()
            $("#songs-find").children().remove()
             }
    })
}

function time(x){
    if(x/1000/60<10){
      var min=('0'+Math.floor(x/1000/60))
    }else{
        min=Math.floor(x/1000/60)
    }
    
    if(x/1000%60<10){
     var sec='0'+Math.round(x/1000%60)
    }else{
        sec=Math.round(x/1000%60)
    }
    
    return min+':'+sec;
}