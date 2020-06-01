<html>
<head>
<meta charset="utf-8"/>
 </head>
 <body style="background-color:black; color:white">
 

 <center>
 <?php 
	
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";
  
$polaczenie = mysql_connect($host,$db_user,$db_password);
mysql_query("SET CHARSET utf8");
mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
mysql_select_db($database);
$nr=$_GET['id'];
  
$rezultat=mysql_query("SELECT tytul FROM wpisy WHERE id=".$nr);		
$wiersz = mysql_fetch_assoc($rezultat);

$tresc = $wiersz['tytul'];
 
mysql_close($polaczenie); 
	
echo $tresc;
 
?>
<br><br>
 <?php 
	
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";
  
$polaczenie = mysql_connect($host,$db_user,$db_password);
mysql_query("SET CHARSET utf8");
mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
mysql_select_db($database);
$nr=$_GET['id'];
  
$rezultat=mysql_query("SELECT tresc FROM wpisy WHERE id=".$nr);		
$wiersz = mysql_fetch_assoc($rezultat);

$tresc = $wiersz['tresc'];
 
mysql_close($polaczenie); 
	
echo $tresc;
 
?>
</center>


 </body>
</html>	