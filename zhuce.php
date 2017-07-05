<?php
	 header("content-typpe","text/html;charset=utf-8");
	 $userName = $_POST["userName"];
	 $userPass = $_POST["userPass"];
	 $con=mysql_connect("localhost","root","lihai");
  	 mysql_select_db("aoliao",$con);
 	$sqlstr="select * from enter where name='".$userName."' and pass='".$userPass."'";
   
	$result = mysql_query($sqlstr,$con);
    $rows = mysql_num_rows($result);
	mysql_query($sqlstr,$con);
    mysql_close($con);
    if($rows=="0"){
		echo "1";
    }else{
   	   echo "0";
    };
?>