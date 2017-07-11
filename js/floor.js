
define(function(require,exports,module){
	
	//串参数的要和格式要求： 参数：需要的arr数组：需要的跳转的位置   实例	var arr=[600,1490,1924,2687,3387,4087,4787]
	//                   jqid表示的：外层的盒子jqid；要求里面必须是ul-li的格式 可以写a标签        ceng.lou(arr,"#ce-le","te8");
	//、                                                    class表示：点击的class名，并且在li中不能再出现其他的class名、不需要写成jq的形式
	//					 注意点：后两者的区别 不能搞混 ；
	exports.lou = function(arr,jqid,calss){	     
	    $(window).scroll(function(){	  	
		 	  	    if($("body").scrollTop()>=arr[0]){
		 	  	      $(jqid+" ul").children().eq(0).attr("class",calss).siblings().removeAttr("class") 
		 	  	    }
		 	  	    if($("body").scrollTop()>=arr[1]){
		 	  	    	 $(jqid+" ul").children().eq(1).attr("class",calss).siblings().removeAttr("class")  
		 	  	    }
		 	  	     if($("body").scrollTop()>=arr[2]){
		 	  	    	 $(jqid+" ul").children().eq(2).attr("class",calss).siblings().removeAttr("class")  
		 	  	    }
		 	  	      if($("body").scrollTop()>=arr[3]){
		 	  	    	 $(jqid+" ul").children().eq(3).attr("class",calss).siblings().removeAttr("class")  
		 	  	    }
		 	  	     if($("body").scrollTop()>=arr[4]){
		 	  	    	 $(jqid+" ul").children().eq(4).attr("class",calss).siblings().removeAttr("class")  
		 	  	    }
		 	  	      if($("body").scrollTop()>=arr[5]){
		 	  	    	 $(jqid+" ul").children().eq(5).attr("class",calss).siblings().removeAttr("class")  
		 	  	    }
		 	  	     if($("body").scrollTop()>=arr[6]){
		 	  	    	 $(jqid+" ul").children().eq(6).attr("class",calss).siblings().removeAttr("class")  
		 	  	    }
		 	 })  
		 	  $(jqid).on("click","li",function(){
		 	  	  //  $(this).attr("class","te8").siblings().removeAttr("class")
		 	  	    var num =  $(jqid+" li").index($(this));
		 	  	    if(num=="0"){
		 	  	    	//$("body").scrollTop(800);
		 	  	    	$("body").animate({scrollTop: arr[0]+'px'}, "slow")
		 	  	    }
		 	  	    if(num=="1"){
		 	  	    	$("body").animate({scrollTop: arr[1]+'px'}, "slow")
		 	  	    	//$("body").scrollTop(1500);
		 	  	    }
		 	  	    if(num=="2"){
		 	  	    	//$("body").scrollTop(1924);
		 	  	    	$("body").animate({scrollTop:arr[2]+'px'}, "slow")
		 	  	    }
		 	  	     if(num=="3"){
		 	  	    	//$("body").scrollTop(2687);
		 	  	    	$("body").animate({scrollTop:arr[3]+'px'}, "slow")
		 	  	    }
		 	  	      if(num=="4"){
		 	  	    	//$("body").scrollTop(3387);
		 	  	        $("body").animate({scrollTop: arr[4]+'px'}, "slow")
		 	  	    }
		 	  	    if(num=="5"){
		 	  	    	//$("body").scrollTop(4087);
		 	  	    	$("body").animate({scrollTop:arr[5]+'px'}, "slow")
		 	  	    }
		 	  	     if(num=="6"){
		 	  	    	//$("body").scrollTop(4787);
		 	  	    	$("body").animate({scrollTop: arr[6]+'px'}, "slow")
		 	  	    }
		 	  	   return false;
		 	  });
	}
	
})

