
	 $(function(){
	 	     var cook=getCookie("userName")
	 	  	 if(cook!=""){
	 	  	 	 $(".deng").html("欢迎亲爱的会员："+cook+"") 
	 	  	 }
	 	     $(".he-in").click(function(){
	 	     	
	 	   	 	   $("#head").css("display","none");
	 	    });
	 	     $(".img-in").click(function(){
	 	     	
	 	   	 	   $("#imgz").css("display","none");
	 	    });
	 	 var left= 20;
	 	   for(var i=0;i<$(".back").length;i++){
	 	   	   $(".back")[i].style.background="url(img/right-guide.png) no-repeat "+(left)+"px center" ;
	 	   	   
	 	   	    left-=45;
	 	   	   
	 	   }
	 	   $(".inp1").focus(function(){
	 	   	     $(".inp1").attr("placeholder","请输入你想要的商品名成") 
	 	   })
	 	   $(".inp1").blur(function(){
	 	   	   if($(".inp1").attr("placeholder")=="请输入你想要的商品名成"){
	 	   	   	   $(".inp1").attr("placeholder","卡丹路") ;
	 	   	   }	   	   
	 	   });
	
	 	  $(window).scroll(function(){
	 	  	console.log($("body").scrollTop());
	 	  	    if($("body").scrollTop()>600){
	 	  	    	 $("#ce-le").css("left","0");
	 	  	    	 $(".hea-box").css("display","block");
	 	  	    	 $(".head-na-l").css({top:"0",zIndex:"888",position: "fixed"});
	 	  	    	 $(".inp1,.inp2").css({top:"0",zIndex:"666",position: "fixed",left:"40%",borderRadius:"5px"});
	 	  	    	 $(".head-na-t").css({"display":"none"})
	 	  	    	   $(".head-na-l").mouseenter(function(){
				 	  	   $(".head-na-t").css("display","block");
				 	  })
				 	    $(".head-na-l").mouseleave(function(){
				 	  	   $(".head-na-t").css("display","none");
				 	  });
	 	  	   }
	 	  	    if($("body").scrollTop() <= 600){
	 	  	    	 $("#ce-le").css("left","-90px")
	 	  	    	  $(".hea-box").css("display","none");
	 	  	    	  $(".head-na-l").css({  position:"relative"});
	 	  	    	  $(".inp1,.inp2").css({position:"static",borderRadius:"0px"});
	 	  	    	  $(".head-na-t").css({"display":"block"});
	 	  	    	  $("#ce-le ul").children().eq(0).attr("class","te8").siblings().removeAttr("class")
	 	  	    	  $(".head-na-l").off();
	 	  	    	 
	 	  	    }
	 	  	    if($("body").scrollTop()>600){
	 	  	      $("#ce-le ul").children().eq(0).attr("class","te8").siblings().removeAttr("class") 
	 	  	    }
	 	  	    if($("body").scrollTop()>=1490){
	 	  	    	 $("#ce-le ul").children().eq(1).attr("class","te8").siblings().removeAttr("class")  
	 	  	    }
	 	  	     if($("body").scrollTop()>=1924){
	 	  	    	 $("#ce-le ul").children().eq(2).attr("class","te8").siblings().removeAttr("class")  
	 	  	    }
	 	  	      if($("body").scrollTop()>=2687){
	 	  	    	 $("#ce-le ul").children().eq(3).attr("class","te8").siblings().removeAttr("class")  
	 	  	    }
	 	  	     if($("body").scrollTop()>=3387){
	 	  	    	 $("#ce-le ul").children().eq(4).attr("class","te8").siblings().removeAttr("class")  
	 	  	    }
	 	  	      if($("body").scrollTop()>=4087){
	 	  	    	 $("#ce-le ul").children().eq(5).attr("class","te8").siblings().removeAttr("class")  
	 	  	    }
	 	  	     if($("body").scrollTop()>=4787){
	 	  	    	 $("#ce-le ul").children().eq(6).attr("class","te8").siblings().removeAttr("class")  
	 	  	    }
	 	  })
	 	  $("#ce-le").on("click","li",function(){
	 	  	  //  $(this).attr("class","te8").siblings().removeAttr("class")
	 	  	    var num =  $("#ce-le li").index($(this));
	 	  	    if(num=="0"){
	 	  	    	//$("body").scrollTop(800);
	 	  	    	$("body").animate({scrollTop: '+800px'}, "slow")
	 	  	    }
	 	  	    if(num=="1"){
	 	  	    	$("body").animate({scrollTop: '+1490px'}, "slow")
	 	  	    	//$("body").scrollTop(1500);
	 	  	    }
	 	  	    if(num=="2"){
	 	  	    	//$("body").scrollTop(1924);
	 	  	    	$("body").animate({scrollTop: '+1924px'}, "slow")
	 	  	    }
	 	  	     if(num=="3"){
	 	  	    	//$("body").scrollTop(2687);
	 	  	    	$("body").animate({scrollTop: '+2687px'}, "slow")
	 	  	    }
	 	  	      if(num=="4"){
	 	  	    	//$("body").scrollTop(3387);
	 	  	        $("body").animate({scrollTop: '+3387px'}, "slow")
	 	  	    }
	 	  	    if(num=="5"){
	 	  	    	//$("body").scrollTop(4087);
	 	  	    	$("body").animate({scrollTop: '+4087px'}, "slow")
	 	  	    }
	 	  	     if(num=="6"){
	 	  	    	//$("body").scrollTop(4787);
	 	  	    	$("body").animate({scrollTop: '+4787px'}, "slow")
	 	  	    }
	 	  	   return false;
	 	  })
	 })
