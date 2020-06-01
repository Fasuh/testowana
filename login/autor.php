<html>
<head>

        <link rel="stylesheet" type="text/css" title="a" href="style.css"/>
        <link rel="alternate stylesheet" title="b" type="text/css" href="stylea.css"/>
        <link href='http://fonts.googleapis.com/css?family=Audiowide&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Stalinist+One&subset=latin,latin-ext,cyrillic' rel='stylesheet' type='text/css'>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="scripts.js"></script>
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
		<div id="container"><center>
						<div id="rejestracja">
					<p><form id="register" method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
								Rejestracja:
								<center>
									<input type="radio" id="warrior" name="class" value="1" class="class"> Wojownik
									<input type="radio" id="rogue" name="class"value="2" class="class"> Z³odziej
									<input type="radio" id="mage" name="class"value="3" class="class"> Mag
									<input type="radio" id="archer" name="class"value="4" class="class"> £ucznik<br>
									<input type="text" id="nickname" name="nickname" placeholder="Nickname"><br>
									<input type="password" id="haslo" name="haslo" placeholder="Password"><br>
									<div id="error1"></div><br>
									<div id="staty">
										<div id="nick"></div>
										<div id="avatar"></div>
										<div id="stats"></div>
									</div><br><br>
									<input type="submit" value="Stworz postac">
									<button><a href="index.php">Logowanie</a></button>

								</center>
					</p></form>
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
						echo mysql_error();
						if(isset($_REQUEST['nickname']))$nickname = $_REQUEST['nickname'];
						if(isset($_REQUEST['haslo']))$haslo = $_REQUEST['haslo'];
						if(isset($_REQUEST['class']))$klasa = $_REQUEST['class'];
						if(isset($nickname)){
						if(strlen($nickname)>=5){
							if(strlen($haslo)>=5){
							$sprnick=mysql_query('SELECT * FROM postacie WHERE nick="'.$nickname.'"');
							echo mysql_error();
							$ile = mysql_num_rows($sprnick);	
							if($ile==1){
								echo "nick juz istnieje";
							}
							else{				
								switch($klasa){
									case 1:$odiumi = "1,1,50,0,120,15,50,45,100,";
									break;
									case 2:$odiumi = "2,1,50,0,110,10,60,55,110,";
									break;
									case 3:$odiumi = "3,1,50,0,95,5,100,80,105,";
									break;
									case 4:$odiumi = "4,1,50,0,100,15,60,55,110,";
									break;
								}
                                                                $nickname = ucfirst(strtolower($nickname));
							        $_SESSION["nick"] = ucfirst($nickname);
								$wprowadzanie = 'INSERT INTO `postacie`(`id`, `nick`, `klasa`, `lvl`, `doswdl`, `doswp`, `hp`, `str`, `mp`, `int`, `spe`, `gold`, `sklephp`, `sklepstr`, `sklepmp`, `sklepint`, `sklepspe`, `pktum`, `Haslo`) VALUES (0,"'.$nickname.'",'.$odiumi.'100,0,0,0,0,0,0,"'.$haslo.'")';
								if(mysql_query($wprowadzanie)){
								session_start();
								$_SESSION["nick"] = $nickname;
								header("Location:DAC.php");
                                                                }
							}
							}
							else{
								echo "Haslo musi miec conajmniej 5 znakow";
							}
						}
						else{
							echo "nick musi miec conajmniej 5 znakow";
						} 
						}
				}
				?>
        </div>
	</div>
</body
</html>