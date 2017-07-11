$(function(){
	 
	  $("footer").load("index.html #footer .foot-c")
		var left=-271
		for(var i=0;i<$(".head-c").length;i++){
			$(".head-c")[i].style.background="url(img/foot-sprite.png) no-repeat "+left+"px -106px";
			left-=90;
		}
		for(var i=0;i<$(".bor0").length;i++){
			$(".head-c")[i].style.background="url(img/foot-sprite.png) no-repeat "+left+"px -106px";
			left-=90;
		}
		$("form").on("focus","input",function(){
			
			$(this).next().next("p").children("span").css("display","block").siblings().css("display","none");
		})
		var sub=true; 
		$("form").on("blur","input",function(){
			$(this).next().next("p").children("span").css("display","none");
			     var str=null
			    var reg=/^1\d{10}$/ig;
			    var reg1=/^\w{6,20}$/;
			    var num=$("form").children("input").index($(this));
			   switch (num){
			   	 case 0:
			   	      //console.log($(this).val())
			   	      if(reg.test($(this).val())==false && $(this).val()!=null){
			   	 	         $(this).next().next("p").children("em").html("账号暂时只开放手机号注册");
			   	 			$(this).next().next("p").children("em").css("display","block").siblings().css("display","none");
					   	 	  sub=false;
					   }else{
					   		   var that = this;
					   	       $.get("register.php","usertName="+$(this).val()+"",function(data){
						   	 	  	   if(data=="0"){
						   	 	  	   	    sub=false
						   	 	  	   	   $(that).next().next("p").children("em").html("用户已经注册");
						   	 	  	   	   $(that).next().next("p").children("em").css("display","block").siblings().css("display","none") 
						   	 	  	   }else{
						   	 	  	   	  	$(that).next().next("p").children("em").html("可以注册了，亲");
						   	 	  	   	    $(that).next().next("p").children("em").css("display","block").siblings().css("display","none")
						   	 	  	   }
					   	 	  	});
					   	
					   };break;
			   	 case 1:
			   	       str=$(this).val()
			   	      if(reg1.test(str)==false  && $(this).val()!=null){
			   	      	  sub=false
			   	 	    $(this).next().next("p").children("em  ").css("display","block").siblings().css("display","none");  
			   	 	    };break
			   	 case 2:if($(".in_2").val()!=$(this).val()  && $(this).val()!=null){
			   	 	      sub=false
			   	 	  	$(this).next().next("p").children("em  ").css("display","block").siblings().css("display","none"); 
			   	 	  	test=5
			   	     }    
			   	 ;break;
			   	 default: break;
			   }
		});
		$("form").on("submit",function(){
					if(sub==false){
						return false
					}
					return true;
		})
	    gogo(".yanzhengma",10)
})
function gogo(jqId,tiem){
		let time=null
		let dao=0;
		$(jqId).on("click",function(){
			clearInterval(time);
			 dao=10
			time=setInterval(go,1000)
			 return false;
		});
		function go(){
			if(dao<=0){
				clearInterval(time);
				$(jqId).html("重新获取")
				/*$(jqId).on("click",function(){
					 dao=tiem
					time=setInterval(go,1000)
					 return false;	
				})*/
				return;
			}
			 $(jqId).html(dao);
			 dao--;
			 //$(jqId).off("click");
			 $(jqId).on("click",function(){
			 	 return false;	
				})
        };	
}

