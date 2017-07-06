require(["js/jquery-1.8.3.min.js","reqjs/reqcookieTools.js"],function(a,cookie){
	$("nav").load("index.html #nav")
	$("footer").load("index.html #footer")
	 
  
   console.log(cookie.getCookie("userName"))
   $.get("getShoppingCart.php",{vipName:cookie.getCookie("userName")},function(data){
   	  var josn=eval('('+data+')')
   	  for(var i=0;i<josn.length;i++){
var str= " <tr><td><input type='checkbox' checked='checked'/></td>"
+"<td class='d1'><dt class='left'><img class='img' src='"+josn[i].goodsImg+"'/></dt><dd class='left size'><a href='#'>"+josn[i].goodsName+"</a></dd></td>"
+"<td class='dd1'>"+josn[i].goodsPrice+"</td>"
+ "<td class='d6'><input class='in1' type='button' value='-'/><input class='in10' type='text' value='"+josn[i].goodsSum+"' /><input class='in3' type='button' value='+' /></td>"
+"<td class='d4'>00</td><td class='d2'>4354</td>"
+" <td class='d5' ><p><a href='#'>已入手厂家</a></p><p><a href='#'>删除</a></p></td></tr>"
   $("tbody").append(str);}
	   zeng();
	   dian()
	   cang()
   })
   
})
function dian(){
	 $(".in1").click(function(){
   		
   	    var num=parseInt($(this).next().val());
   	    $(this).next().val(num-1)
   	      	    if($(this).next().val()<1){
   	     	 $(this).next().val("1");
   	     }
   	     zeng()
   })
  
     $(".in3").click(function(){
   		//$(this).siblings(".in10").val();
   	    var num=parseInt($(this).siblings(".in10").val());
   	     $(this).siblings(".in10").val(num+1);
   	     if($(this).siblings(".in10").val()>10){
   	     	$(this).siblings(".in10").val("10")
   	     }
   	    zeng()
   });
	
	
}
function zeng(){
	//var num1=parseInt($(".dd1").html());
	//var num2=parseInt($(".in10").val());
	//$(".d2").html("￥"+num1*num2);
	var reu=0
	var reu1=0
	for(var i=0;i<$(".dd1").length;i++){
			     
		 reu += parseInt($(".in10")[i].value)
	var	 num=parseInt($(".dd1")[i].innerHTML)*parseInt($(".in10")[i].value);
	   $(".d2")[i].innerHTML="￥"+num
		reu1+=num
	}
	$(".num").html("￥"+reu);
	$(".zj").html("￥"+reu1);
}
function cang(){
	if($(".num").html()=="￥0"){
		$(".show-zo").css("display","block");
		$(".show-bi").css("display","none");
	}else{
		$(".show-zo").css("display","none");
		$(".show-bi").css("display","block");
		
	}
	
}
