<?php

include 'baglanti.php';

mysqli_query($connection,"delete from bloklar where bokindex=".$_GET[id]);

echo "OK";

?>