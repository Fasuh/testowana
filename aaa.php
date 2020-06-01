<?php
$fp=fopen("adresy.txt", "a");
flock($tp, 2);
fwrite($tp, $_server['remote_addr']."n");
flock($fp, 3);
fclose($fp);
?>