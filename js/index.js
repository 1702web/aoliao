seajs.use(["cmdcookieTools","banner","floor","daojishi"],function(cook,slide,ceng,dao){
	     //楼层引来的
		var arr=[600,1490,1924,2687,3387,4087,4787];
		ceng.lou(arr,"#ce-le","te8");
     	 var cook=cook.getCookie("userName");
     	 //倒计时
    setInterval(function(){dao.ShowCountDown(2017,7,11,'divdown1');}, 1000)
     	 //获取name的值
	 	if(cook!=""){
					$(".deng").html("欢迎亲爱的会员："+cook+"") 
		}
						
	 	$(".he-in").click(function(){
		 	   	 	   $("#head").css("display","none");
		 	    });
		 	     $(".img-in").click(function(){
		 	     	
		 	   	 	   $("#imgz").css("display","none");
		 	    });
		 	    //input标签的处理代码
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
	
		  //出现第一楼要做的事情			
	 	  $(window).scroll(function(){
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
		 	  	 if($("body").scrollTop() < 600){
	 	  	    	  $("#ce-le").css("left","-90px")
	 	  	    	  $(".hea-box").css("display","none");
	  	    	      $(".head-na-l").css({  position:"relative"});
	  	    		  $(".inp1,.inp2").css({position:"static",borderRadius:"0px"});
	 	  	    	  $(".head-na-t").css({"display":"block"});
	 	  	    	  $("#ce-le ul").children().eq(0).attr("class","te8").siblings().removeAttr("class")
	 	  	    	  $(".head-na-l").off();
	 	  	    	 
		 	  	}
	 	  });
	 	  
	 	 //轮播图 
	new slide.Banner({
		boxId:"banner01",
		aArr:["#","#","#","#","#"],
		imgArr:["img/banner0.jpg","img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg"],
		width:990,
		height:460,
	    fadeInOutTime:1000,
	    pauseTime:2000,
		btnWidth:20,
		btnHeight:20,
		btnSpace:15,
		btnColor:"#AAA",
		btnHighColor:"#E74D3D",
		bigBtnWidth:50,
		bigBtnHeight:75,
		bigBtnColor:"#666",
		bigBtnFontColor:"white",
		btnHasOrd:false
	})
	//聊天框
	//回车回复信息
	$("textarea").keydown(function(event){
		var e = event || window.event
		if(e.keyCode ==13){
		
			chuan()
			return false
		}
	
	})
	$(".tan-fo").on("click","a",function(){
		var num = $(".tan-fo").children().index($(this));
		if(num==0){
		    $("#tan").css("display","none")   
		  };
		  if(num==1){
		       chuan();
		  }
		  return  false;
	})
	 $("textarea").val("");
  function chuan(){
  		var d=new Date();
  		var shi=d.getHours();
  		var ff=d.getMinutes();	
  	   var str =$("textarea").val()
		 if(str!=""){
		    $(".tan-co").append("<div class='left mi'><p>"+str+"</p><span>"+shi+":"+ff+" </span></div>")
		    $("textarea").val("");
		    $.get("huihua.php",{"usestr":str},function(data){
		    	if(data!=""){
			      	var	json=eval('('+data+')'); 
			        $(".tan-co").append("<div class='right mi'><p>"+json.endstr+"</p><span>"+shi+":"+ff+" </span></div>")
			         $("textarea").val("");
			         	$(".tan-co").scrollTop($(".tan-co")[0].scrollHeight)
		        }
		    })
		}
		 console.log($(".tan-co")[0].scrollHeight)
  		$(".tan-co").scrollTop($(".tan-co")[0].scrollHeight)
      }
   $(".kefu").click(function(){
   		$("#tan").css("display","block");
   		
    return false
   })
   
})
//..........................闹着 玩那。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
///参数 ：arr数组        #ce-lejq的复原的id   //要求必须是的ul/li里的格式切是a标签 /  点着的class名切其他的li不能再起class名
//arr[600,1490,1924,2687,3387,4087,4787]

