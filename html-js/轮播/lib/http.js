var url="https://douban-api.uieee.com/v2/movie/top250";
function http({type="get",callback,data={}}){
    $.ajax({
        url,
        data,
        type,
        dataType:"jsonp",
        success:function(res){
            callback(res)
            $("#loading").hide()
        },
        beforeSend:function(){
            $("#loading").show()
        }
    })
}
function onReachBottom(){
    var dh=$(document).height();
    var sh=$(window).scrollTop();
    var ah=$(window).height();
    return (Math.ceil(sh+ah)==dh)?true:false;
}

