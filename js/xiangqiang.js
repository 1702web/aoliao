$(function(){
    $.get("getGoodsInfo.php",{goodsId:getCookie("doodsId")},function(data){
    	  var json= eval('('+data+')')
    	  $(".jie1").html(json.goodsType)
    	   $(".p1").html(json.goodsName)
    	   $(".jie2").html("￥"+json.goodsPrice)
    	  $(".jie3").html("￥"+json.goodsCount);
    	  var img1=json.goodsImg;
    	  var img2=json.beiyong1;
    	  fang(img1,img2)
    });
	$("header").load("index.html #head");
	$("nav").load("index.html #nav")
	$("section").load("index.html #header");
	$("footer").load("index.html #footer");
	$("article").load("index.html #cebian-ri",function(){
		$(".head-na-t").css("display","none");
		$(".head-na-l").mouseenter(function(){
				$(".head-na-t").css("display","block");
		})
			$(".head-na-l").mouseleave(function(){
				$(".head-na-t").css("display","none");
		})
		 var left= 20;
 	   for(var i=0;i<$(".back").length;i++){
 	   	   $(".back")[i].style.background="url(img/right-guide.png) no-repeat "+(left)+"px center" ;
 	   	   
 	   	    left-=45; 
 	   };   
	});
	$(".inp1").click(function(){
		
		$(".inp").val(parseInt($(".inp").val())+1)
		if($(".inp").val()>=10){
			$(".inp").val("10")
		}
	})
	$(".inp2").click(function(){
		$(".inp").val(parseInt($(".inp").val())-1)
		if($(".inp").val()<=1){
			$(".inp").val("1")
		}
	})
	$(window).scroll(function(){
		//console.log($(window).scrollTop())
		 if($(window).scrollTop()>830){
		 	  $(".foot-to").css({top:"0",position:"fixed",width:"1000px"})
		 	 $(".foot-r-t").css("marginTop","45px")
		 	 $(".foot-to-y").css("display","block")
		 }
		 if($(window).scrollTop()<830){
		 	  $(".foot-to").css({top:"0",position:"static",width:"1000px"})
		 	 $(".foot-r-t").css("marginTop","0px")
		 	 $(".foot-to-y").css("display","none")
		 }
	});
}) 
function  fang(img1,img2){
	new ShowGoods({
        boxId: "show",
        boxWidth: 500,
        boxHeight: 500,
        times: 2,
        imgArr: [img1, img2],
        imgWidth: 380,
        imgHeight: 380,
        zoomColor: 'yellow',
        zoomWidth: 150,
        zoomHeight: 150,
        listWidth: 100,
        listHeight: 100,
        listBorderColor: '#AAA',
        listBorderHeighColor: 'red',
        listSpace: 5,
        listNum: 4,
        btnWidth: 30,
        btnColor: 'black',
        btnFontSize: 45,
        btnFontColor: 'white',
        btnFontHeighColor: 'red'
    })
}
