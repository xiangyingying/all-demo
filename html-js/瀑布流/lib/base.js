function onReachBottom(){
    var dh=$(document).height();
    var wh=$(window).scrollTop();
    var ah=$(window).height();
    return (Math.ceil(wh+ah)==dh)?true:false
}