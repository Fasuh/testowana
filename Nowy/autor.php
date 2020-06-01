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
		<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
			<select name="Typ">
				<option>-ALL-</option>
				<option>Fire</option>
				<option>Water</option>
				<option>Earth</option>
				<option>Spirit</option>
				<option>Air</option>
				<option>Starmetal</option>
			</select>
			<input type="submit">
		</form>
			
	<?php 
  $host="mysql.cba.pl";
  $db_user="Fasuk";
  $db_password="Krzysieg123";
  $database="testowana_cba_pl";
  
		$polaczenie = mysql_connect($host,$db_user,$db_password);
		mysql_query("SET CHARSET utf8");
		mysql_query("SET NAMES 'utf8' COLLATE 'utf8_polish_ci'"); 
		mysql_select_db($database);
		if(isset($_REQUEST['Typ'])){
			$name = $_REQUEST['Typ']; 
			if($name=="-ALL-"){
				$rezultat=mysql_query('SELECT * FROM zbroje');
			}else $rezultat=mysql_query('SELECT * FROM zbroje WHERE Type="'.$name.'"');
		}
		else $rezultat=mysql_query('SELECT * FROM zbroje');
	

		$ile = mysql_num_rows($rezultat);	
		echo '<table border="5" style="color:gray">';
		echo '<tr><td>Name</td><td>Type</td><td>Attack</td><td>Defence</td><td>Combined</td><td>Attack+</td><td>Defence+</td><td>Combined+</td></tr>';
		for($i=1; $i<=$ile; $i++){
		$wiersz=mysql_fetch_assoc($rezultat);
		echo '<tr><td>'.$wiersz['Nazwa'].'</td>';
		echo '<td>'.$wiersz['Type'].'</td>';
		echo '<td>'.$wiersz['Attack'].'</td>';
		echo '<td>'.$wiersz['Defence'].'</td>';
		echo '<td>'.$wiersz['Combined'].'</td>';
		echo '<td>'.$wiersz['Attack+'].'</td>';
		echo '<td>'.$wiersz['Defence+'].'</td>';
		echo '<td>'.$wiersz['Combined+'].'</td></tr>';

		}
		echo '</table>';
		mysql_close($polaczenie);  
	?>
        </div>
	</div>
</body
</html>