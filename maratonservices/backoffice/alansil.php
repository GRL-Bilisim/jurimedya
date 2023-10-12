<?php

include 'baglanti.php';

mysqli_query($connection,"delete from bloklar_alti where altindex=".$_GET[id]);

echo "OK";

?>