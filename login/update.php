<?php
session_start();
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";

   $src1= $_POST['name'];
   $array = explode(",", $src1);
	$polaczenie = mysql_connect($host,$db_user,$db_password);
	mysql_query("SET CHARSET utf8");
	mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
	mysql_select_db($database);

   mysql_query('UPDATE `postacie` SET `lvl`= '.$array[3].',`doswdl`='.$array[4].',`doswp`='.$array[5].',
`hp`='.$array[6].',`str`='.$array[7].',`mp`='.$array[8].',`int`='.$array[9].',`spe`='.$array[10].',
`gold`='.$array[11].',`pktum`='.$array[17].', `aktzdr`='.$array[19].' WHERE nick="'.$_SESSION['nick'].'"');
 $_SESSION['q']=0;
?>