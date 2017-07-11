require(["reqjs/reqcookieTools.js","js/jquery-1.8.3.min.js"],function(cookie){
	$("nav").load("index.html #nav");
	$("footer").load("index.html #fooer",function () {
        var cook=cookie.getCookie("userName");
        if(cook!=""){
            $(".deng").html("欢迎亲爱的会员："+cook+"")
        }
    });
	 
  
   //console.log(cookie.getCookie("userName"))
   $.get("getShoppingCart.php",{vipName:cookie.getCookie("userName")},function(data){
   	  var josn=eval('('+data+')')
   	  for(var i=0;i<josn.length;i++){
var str= " <tr ord="+josn[i].goodsId+"><td><input type='checkbox' checked='checked'/></td>"
+"<td class='d1'><dt class='left'><img class='img' src='"+josn[i].goodsImg+"'/></dt><dd class='left size'><a href='#'>"+josn[i].goodsName+"</a></dd></td>"
+"<td class='dd1'>"+josn[i].goodsPrice+"</td>"
+ "<td class='d6'><input class='in1' type='button' value='-'/><input class='in10' type='text' value='"+josn[i].goodsCount+"' /><input class='in3' type='button' value='+' /></td>"
+"<td class='d4'>00</td><td class='d2'>4354</td>"
+" <td class='d5' ><p><a href='#'>已入手厂家</a></p><p><a class='rem' href='#'>删除</a></p></td></tr>"
   $("tbody").append(str);}
	   zeng();
	   dian();
	   remove();
   });
   //删除商品
   
   function remove(){
		
		$(".rem").click(function(){
			var that= this;
			var   goodsid= $(this).parents("tr").attr("ord");
			$.get("deleteGoods.php",{vipName:cookie.getCookie("userName"),goodsId:goodsid},function(data){
				if(data=="1"){
					$(that).parents("tr").remove()
					
					 zeng()
				}else{
					alert("删除失败");
				}
				
			})
			return false
		})
	}
   //修改商品
   function dian(){
		 $(".in1").click(function(){
	   	    var num=parseInt($(this).next().val())-1;
			 var that=this;
			 if(num>0){
	   	     	var goodsid=$(this).parents("tr").attr("ord");
	   	    	$.get("updateGoodsCount.php",{vipName:cookie.getCookie("userName"),goodsId:goodsid,goodsCount:num},function(data){
		   	   	   if(data=="1"){
		   	   	   	 $(that).next().val(num)
		   	   	   	  	zeng()
		   	   	   }else{
		   	   	     
		   	   	   	  alert("修改失败"); 
		   	   	   }
   	  			});		
	   	 	 }
	   })
  
	     $(".in3").click(function() {
             var num = parseInt($(this).siblings(".in10").val()) + 1;
             var goodsid = $(this).parents("tr").attr("ord")
             var that=this;
             if (num <= 10) {
                 $.get("updateGoodsCount.php", {
                     vipName: cookie.getCookie("userName"),
                     goodsId: goodsid,
                     goodsCount: num
                 }, function (data) {
                     if (data == "1") {
                         $(that).siblings(".in10").val(num);
                         zeng();
                     } else {

                         alert("修改失败");
                     }
                 })
             }
	     });
	}
});
//计算的方法
function zeng(){
	var reu=0
	var reu1=0
	for(var i=0;i<$(".dd1").length;i++){
			     
		 reu += parseInt($(".in10")[i].value)
	var	 num=parseInt($(".dd1")[i].innerHTML)*parseInt($(".in10")[i].value);
	   $(".d2")[i].innerHTML="￥"+num
		reu1+=num
	}
	$(".num").html(reu);
	$(".zj").html("￥"+reu1);
	$("#topshow").html(reu);
	cang()
}
function cang(){
	if($(".num").html()=="0"){
		$(".show-zo").css("display","block");
		$(".show-bi").css("display","none");
	}else{
		$(".show-zo").css("display","none");
		$(".show-bi").css("display","block");
	}
}
