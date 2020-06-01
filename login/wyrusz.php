<html>
<head>
        <link rel="stylesheet" type="text/css" title="a" href="style.css"/>
        <link href='http://fonts.googleapis.com/css?family=Audiowide&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Stalinist+One&subset=latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="wszystko">
		<div id="gora">
                     <div id="head">
			<div id="header">
                          <br>B.Szmajda<br>D.Zaradzki
                          <br><div id="kalendarz" style="Font-size:10px; float:right"></div>
                        </div>
			<div id="menu">
		       <center><a href="index.php" style="text-decoration:none;"> <div class="but" id="but1">
                       Start
                       </div></a>
		       <div id="calce" class="but" onmouseover="calce1()" onmouseout="calce2()">kalkulatory</br><a href="DAC.php" style="text-decoration:none;"><div id="calce1">
                       DA Calc
                       </div></a></div>
		       <a href="JM.php" style="text-decoration:none;"> <div class="but" id="but3">
                       JM
                       </div></a>
		       <a href="autor.php" style="text-decoration:none;"> <div class="but" id="but4">
                       Twórcy
                       </div></a>
                       </center>
		       </div>
                     </div>
		</div>
		<div id="container">
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
  
$rezultat=mysql_query('SELECT Location.id, Location.name FROM Location, postacie WHERE postacie.loc=Location.loc  AND postacie.nick="'.$_SESSION['nick'].'" ');	

$ile = mysql_num_rows($rezultat);	

for($i=1; $i<=$ile; $i++){
	$wiersz=mysql_fetch_assoc($rezultat);
echo '<a href="nowawalka.php?q='.$wiersz['id'].'">'.$wiersz['id'].'. ';
echo $wiersz['name'].'</a><br />';
}
					?>
		</div>
	</div>
</body
</html>	