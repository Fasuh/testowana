<html>
<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="scripts.js"></script>
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
			<div id="logowanie">
				Zaloguj sie:
				<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
				<input type="text" id="Login" name="login" placeholder="Nickname"><br>
				<input type="password" id="password" name="password" placeholder="Password"><br>
				<input type="submit" id="Zaloguj" value="Login">
				<button><a href="autor.php">Rejestracja</a></button><br>
				</form>
			</div>
				<?php 
				session_start();
				if(isset($_SESSION["nick"])){
					header("Location:DAC.php");
				}else{
					session_destroy();
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";
				  
						$polaczenie = mysql_connect($host,$db_user,$db_password);
						mysql_query("SET CHARSET utf8");
						mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
						mysql_select_db($database);
						if(isset($_REQUEST['login']))$nick = $_REQUEST['login']; 
						if(isset($_REQUEST['password']))$haslo = $_REQUEST['password']; 
						if(isset($nick) && isset($haslo)){
						$logowanie=mysql_query('SELECT * FROM postacie WHERE nick="'.$nick.'" AND Haslo="'.$haslo.'"');
						$ile = mysql_num_rows($logowanie);	
						if($ile==1){
							session_start();
                                                        $nick = strtolower($nick);
							$_SESSION["nick"] = ucfirst($nick);
							header("Location:DAC.php");
						}
						else{
							   mysql_close($polaczenie);  
							   echo 'niepoprawne dane logowania';
						}
						mysql_close($polaczenie);  
						}
				}
					?>
			</div>
		</div>
	</div>
</body
</html>	