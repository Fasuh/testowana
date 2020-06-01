<?php
session_start();
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";

	$polaczenie = mysql_connect($host,$db_user,$db_password);
	mysql_query("SET CHARSET utf8");
	mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
	mysql_select_db($database);

   $rezultat = mysql_query('SELECT * FROM postacie WHERE nick="'.$_SESSION['nick'].'"');
   $values = mysql_fetch_row($rezultat);
   $values[13] = $values[20]; 

echo json_encode($values);


?>		