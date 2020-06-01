<html>
<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="walkajs.js"></script>
        <link rel="stylesheet" type="text/css" title="a" href="style.css"/>
        <link rel="alternate stylesheet" title="b" type="text/css" href="stylea.css"/>
        <link href='http://fonts.googleapis.com/css?family=Audiowide&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Stalinist+One&subset=latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
<?php
session_start();
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";

$array=json_decode($_POST['stats']);
	$polaczenie = mysql_connect($host,$db_user,$db_password);
	mysql_query("SET CHARSET utf8");
	mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
	mysql_select_db($database);

   $rezultat = mysql_query('UPDATE `postacie` SET lvl`='.$array[3].',`doswdl`='.$array[4].',`doswp`='.$array[5].',`
               hp`='.$array[6].',`str`='.$array[7].',`mp`='.$array[8].',`int`='.$array[9].',`spe`='.$array[10].',`
               gold`='.$array[11].',`pktum`='.$array[17].' WHERE nick="'.$_SESSION['nick'].'"');


?>
</head>
<body onLoad="cos()">
	<div id="wszystko">
		<div id="gora">
                     <div id="head">
			<div id="header">
                          <br>Testowana
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
		<div id="containerz" onLoad="statystyki()">
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
			
				if(isset($_SESSION["nick"])!=NULL){
					$nick = isset($_SESSION['nick']) ? $_SESSION['nick'] : '';
				}
				else{
					header("Location:index.php");
				}

				?>
					<form method="POST" action="scripts.php">
					<input type="submit" value="Wyloguj" name="logout" onClick="logout()" id="logout">
					</form>
					<input type="button" value="Save" id="zapisz">
							<div id="bitwa">
					<p><center>
						<div id='battleground'>
							<div id='death'></div>
							<div id='shop'></div>
							<div id='mstat' class='statystyki'>
								<br>
								<div id='nick'></div>
								<div id='avatar'></div>
								<div id='level'></div>
								<div id='stats'></div>
							</div>
							<div id='wybor'>
							<div id="sklepik">
							<br><br><br>
								<input type='button' id='miecz' value='Kup miecz'>
								<input type='button' id='zbroja' value='Kup zbroje'>
								<input type='button' id='buty' value='Kup buty'>
								<input type='button' id='rozczka' value='Kup rozczke'>
								<input type='button' id='peleryna' value='Kup peleryne'>
								<br><br><br>
								<input type='button' id='zamkshop' value='Zamknij sklep'><br>
								<center><div id="error2"></div></center>
							</div>
								<br>
								<input type='button' id='heal' value='Leczenie'><input type='button' id='shope' value='sklep'>
								<div id="awans">
									<br><br><br><br><br><br>
									AWANS<br>
									dostepne punkty statystyk: <div id="sp"></div>
									<br><br>
									<input type='button' id='HP' value='HP'>
									<input type='button' id='STR' value='STR'><br>
									<input type='button' id='MP' value='MP'>
									<input type='button' id='INT' value='INT'>
									<input type='button' id='SPE' value='SPE'>
								</div>
							</div>
							<div id='pstat' class='statystyki'>
								<div id='pavatar'></div><br>
								<div id='pstats'></div>
							</div>
						</div>
					</center></p>
			</div>
        </div>
	</div>
</body
</html>