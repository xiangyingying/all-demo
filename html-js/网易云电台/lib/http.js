/* var url="https://douban-api.uieee.com/v2/movie/top250";
function http({type="get",callback,data={}}){
      $.ajax({
          url,
          data,
          type,
          dataType:"jsonp",
          success:function(res){
              callback(res)
          }
      })
}
function onReachBottom(){
    var dh=$(document).height();
    var sh=$(window).scrollTop;
    var wh=$(window).height();
    return(Math.ceil(sh+wh)==dh)?true:false;
} */
var url ="https://douban-api.uieee.com/v2/movie/top250";
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
}