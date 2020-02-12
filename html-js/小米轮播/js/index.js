/*  $(document).ready(function(){
    var index=0;
    $(".next").click(function(){
       index++;
        if(index>4){
           index=0;
        }
        animate(index);
    })
     $(".prev").click(function(){
       index--;
        if(index<0){
           index=4;
        }
        animate(index)
    })
    function animate(index){
        $(".content img").eq(index).show().siblings().hide()
$(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active");
     }
 }) */
 $(document).ready(function(){
    // 定义正在显示的元素的下标
    var index = 0;
    $(".next").click(function(){
    index++;
        if(index>4){
             index = 0;
        }
         animate(index);
        
     })
     $(".prev").click(function(){
        index--;
        if(index<0){
            index=4;
         }
         animate(index)
     })
     $(".all-icons>span").click(function(){
         index=$(this).index()
         animate(index)
     })
     function animate(index){
         $(".content img").eq(index).show().siblings().hide()
         $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active");
     }
 })
