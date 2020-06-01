<html>
 <head>
 <meta charset="utf-8"/>
 </head>	
 <body style="background-color:black; color:white" >
<center>
<?php 
	$id="0";
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";
  
$polaczenie = mysql_connect($host,$db_user,$db_password);
mysql_query("SET CHARSET utf8");
mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
mysql_select_db($database);
  
$rezultat=mysql_query("SELECT * FROM wpisy");	

$ile = mysql_num_rows($rezultat);	

for($i=1; $i<=$ile; $i++){
$id+=1;
	$wiersz=mysql_fetch_assoc($rezultat);
echo '<a href="wpis.php?id='.$id.'">'.$wiersz['id'];
echo $wiersz['tytul'].'</a><br />';
}
mysql_close($polaczenie);  
?>
</center>
 </body>
</html>