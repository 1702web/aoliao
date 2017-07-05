<?php
	 header("content-typpe","text/html;charset=utf-8");
	 
	 $userName = $_POST["userName"];
	 $userPass = $_POST["userPass"];
	 $con=mysql_connect("localhost","root","lihai");
  	 mysql_select_db("aoliao",$con);
 	 $sqlstr = "insert into enter(name,pass) values('".$userName."','".$userPass."')";
	 mysql_query($sqlstr,$con);
     mysql_close($con);
   
     echo  "<a href='index.html'>到达首页</a>"
	     
?>