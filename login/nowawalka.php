<html>
<head>
			<?php 
				session_start();
  $_SESSION['q']=$_GET['q'];
if($_SESSION['q']==NULL)header("Location:wyrusz.php");
else{
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
}
				?>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="nowawalka.js"></script>
        <link rel="stylesheet" type="text/css" title="a" href="style.css"/>
        <link rel="alternate stylesheet" title="b" type="text/css" href="stylea.css"/>
        <link href='http://fonts.googleapis.com/css?family=Audiowide&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Stalinist+One&subset=latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
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

					<form method="POST" action="scripts.php">
					<input type="submit" value="Wyloguj" name="logout" onClick="logout()" id="logout">
					</form>
							<div id="bitwa">
					<p><center>
						<div id='battleground'>
							<div id='mstat' class='statystyki'>
								<br>
								<div id='nick'></div>
								<div id='avatar'></div>
								<div id='level'></div>
								<div id='stats'></div>
							</div>
							<div id='wybor'></div>
							<div id='pstat' class='statystyki'>
								<div id='pavatar'></div><br>
								<div id='pstats'></div>
							</div>
						</div><?php echo '<a href="http://fasuk.cba.pl/login/nowawalka.php?q='.$_SESSION['q'].'">powtorz wyprawe</a> '?>
					</center></p>
			</div>
        </div>
	</div>
</body
</html>