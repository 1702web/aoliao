$(function(){
	$(".gif").show();
	$("header").load("index.html #head");
	$("nav").load("index.html #nav");
	$("section").load("index.html #header");
	
	$("footer").load("index.html #footer",function(){
		$(".head-na-t").css({"display":"none"});
		
		$(".head-na-l").mouseout(function(){
		   $(".head-na-t").css("display","none")
		})
		$(".head-na-l").mouseover(function(){
		   $(".head-na-t").css("display","block")
		});
	});

	 $(".gif").ajaxStop(function(){
	 	  $(".gif").hide();
	 	
	 })
	$(".cen-f").click(function(){
		if($(".cen-z")[0].style.display=="block"){
			//$(".cen-z").css("display","none")
			$(".cen-z").slideUp(1000)
			$(".cen-f a").html("更多赛徐材料(材料),开袋方式，内容结构）")
		}else{
			
			$(".cen-z").slideDown(1000);
			$(".cen-f a").html("收齐")
		}
		return false
	});
	
	$(".p1_d").mouseenter(function(){
		$(".p1-p").css("display","block")
	});
	
	$(".p1-p").mouseleave(function(){
		$(".p1-p").css("display","none")
	});
	//后天请求
	$.get("getGoodsList.php",function(data){
		  var json=eval('('+data+')');
		    crea(json);
	});
	$(".list").on("click","li",function(){
		saveCookie("doodsId",$(this).attr("ord"),1)
	})
})
function crea(josn){
		for(var i=0;i<josn.length;i++){
		var str="<li ord='"+josn[i].goodsId+"'><a href='xiangqing.html'><dt><img class='imgcl' src='"+josn[i].goodsImg+"'/></dt><dd class='d1'><img src='"+josn[i].goodsImg+"'/><img src='"+josn[i].beiyong1+"'/></dd><dd class='d2'><em>￥"+josn[i].goodsPrice+"</em><del>￥"+josn[i].goodsCount+"</del></dd><dd class='d3'>"+josn[i].goodsName+"</dd></a></li>"
		    $(".list").append(str);  				
		}
		 bian();
}
function  bian(){
	$(".d1").on("mouseenter","img",function(){
		 $(this).css("border","1px solid red")
		
		 var img=$(this).parents("dd").siblings("dt").children()
		 $(img).attr("src",$(this).attr("src"))
	});
  $(".d1").on("mouseleave","img",function(){
  	 $(this).css("border","1px solid #fff")
  })
}
