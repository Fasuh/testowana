<html>
<head>
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
                          <br>Testowana
                          <br><div id="kalendarz" style="Font-size:10px; float:right"></div>
                        </div>


			<div id="menu">
		       <center><a href="index.php" style="text-decoration:none;"> <div class="but" id="but1">
                       Start
                       </div></a>
		       <div id="calce" class="but" onmouseover="calce1()" onmouseout="calce2()">kalkulatory</br><div id="calce1">
                       <a href="DAC.php" style="text-decoration:none;"><div class="but2">DA Calc
                       </div></a><br>
                       <a href="boost.php" style="text-decoration:none;"><div class="but2">Boost
                       </div></a></div></div>
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
                <p>
				losuj <input type="text" id="ile2" size=1> liczb z puli <input type="text" id="ile" size=1><br> 
				<input type="submit" value="Losuj" onClick="loss()">
				<div id="out">
				</div>
        </div>
	</div>
</body
</html>