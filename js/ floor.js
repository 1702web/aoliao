define(function(require,exports,module){
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
