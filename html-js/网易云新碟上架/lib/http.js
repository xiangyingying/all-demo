var url="https://music.aityp.com/top/album";
function http({type="get",callback,data={}}){
    $.ajax({
        url,
        type,
        dataType:"json",
        data,
        success:function(res){
            callback(res)
            $("#loading").hide()
        },
        beforeSend(){
            $("#loading").show()
        }
    })
}
function onReachBottom(){
    var dh=$(document).height();
    var sh=$(window).scrollTop();
    var wh=$(window).height();
    return (Math.ceil(sh+wh)==dh)?true:false;
}