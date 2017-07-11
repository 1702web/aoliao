<?php
	header("Content-Type:text/html;charset=utf-8");
	$str=$_GET['usestr'];
	$conn = mysql_connect("localhost","root","lihai");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("aoliao",$conn)){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	$result = mysql_query("select * from str where usestr like '%".$str."%'",$conn);
	
	//3.1)先查找该商品是否在购物车中存在
	 $query_cols = mysql_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysql_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="";
	
	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	if($query_row){
		$str = $str."{ 'usestr':'".$query_row[0]."','endstr':'".$query_row[1]."'
		
		}";		
	}
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
	
?>