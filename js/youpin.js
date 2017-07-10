/**
 * Created by Administrator on 2017/7/10.
 */
$(function () {
    $("header").load("index.html #head");
    $("nav").load("index.html #nav");
    $("section").load("index.html #header");
    $("footer").load("index.html #footer",function () {
            $(".head-na-t").css({"display":"none"});

            $(".head-na-l").mouseout(function(){
                $(".head-na-t").css("display","none")
            })
            $(".head-na-l").mouseover(function() {
                $(".head-na-t").css("display", "block")
            })
    });
    $(".te .pin-a-co").fadeIn("1000");
    $(".pin-a-go li").hover(
        function(){
            $(this).attr("class","te").siblings().removeAttr("class");
            $(this).siblings().children(".pin-a-co").css("display","none");
            $(".te .pin-a-co").stop(true,true);
            $(".te .pin-a-co").fadeIn(1000);
        }
    )
});