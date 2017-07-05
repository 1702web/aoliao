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
		$(".in1").focus(function(){
			$(".p1").html("")
		})
	    $(".in1").blur(function(){
	    	if($(".in1").val()==""){
	    		$(".p1").html("请输入邮箱/手机号");
	    	  return;
	    	}
	    	var reg=/^1\d{10}$/ig
	    
	    	if(reg.test($(".in1").val())==false ){
	    		$(".p1").html("请输入邮箱/手机号");
	    	}
	    	
	    })
	    $(".in2").focus(function(){
			$(".p2").html("")
		})
	     $(".in2").blur(function(){
	    	if($(".in2").val()==""){
	    		$(".p2").html("请输入密码");
	    	  return;
	    	}
	    	var reg=/^\w{6,10}$/ig
	    
	    	if(reg.test($(".in2").val())==false ){
	    		$(".p2").html("请输入6-15之间的密码");
	    	}
	    	
	    })
	    $(".inp3").click(function(){
	    	$.post("zhuce.php",{userName:$(".in1").val(),userPass:$(".in2").val()},function(data){
	    		if(data=="0"){
	    			saveCookie("userName",$(".in1").val(),1);
	    			saveCookie("userPass",$(".in2").val(),1);
	    			location.href="index.html";
	    		}else{
	    			$(".p1").html("账号密码不匹配")
	    		};
	    	});
	    	return false;
	    })
})
