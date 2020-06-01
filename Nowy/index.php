<html>
<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="scripts.js"></script>
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
			<div id="rejestracja">
					<p><form id="register">
								<center>
									<input type="radio" id="warrior" name="class" value="1" class="class"> Wojownik
									<input type="radio" id="rogue" name="class"value="2" class="class"> Z³odziej
									<input type="radio" id="mage" name="class"value="3" class="class"> Mag
									<input type="radio" id="archer" name="class"value="4" class="class"> £ucznik<br>
									<input type="text" id="nickname" placeholder="Nickname"><br>
									<div id="error1"></div><br>
									<div id="staty">
										<div id="nick"></div>
										<div id="avatar"></div>
										<div id="stats"></div>
									</div><br><br>
									<input type="button" id="kwybor" value="Stworz postac">

								</center>
					</p></form>
			</div>
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