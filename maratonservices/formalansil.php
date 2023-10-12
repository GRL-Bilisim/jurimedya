<?php

include 'baglanti.php';

mysqli_query($connection,"delete from formalanlari where alan_index=".$_GET[id]);

echo "OK";

?>