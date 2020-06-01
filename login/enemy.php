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
   $ident = mysql_query('SELECT * FROM postacie WHERE nick="'.$_SESSION['nick'].'"');
   $valuez = mysql_fetch_row($ident);
$lvl = intval($valuez[3]);


   $rezultat = mysql_query('SELECT * FROM enemies WHERE lvl<='.$lvl.' AND wyst='.$_SESSION['q']);

   $ile=mysql_num_rows($rezultat);
if($ile>1){
for($i=1;$i<=$ile;$i++){
   $values = mysql_fetch_assoc($rezultat);
   $arr[$i] = $values['chance'];
   $warr[$i] = $values['id'];
   $szan+=$arr[$i];
}
$loss = rand(1, $szan);
for($i=1;$i<=count($arr);$i++){
   $licz += $arr[$i];
   
   if($loss<$licz){ 
      $win = $i;
      $i= count($arr)+100;
   }
}
   $rezultats = mysql_query('SELECT * FROM enemies WHERE id='.$warr[$win].'');
}
else{
   $values = mysql_fetch_assoc($rezultat);
   $rezultats = mysql_query('SELECT * FROM enemies WHERE id='.$values['id'].'');
}
   $valuess = mysql_fetch_row($rezultats);
   echo json_encode($valuess);
?>