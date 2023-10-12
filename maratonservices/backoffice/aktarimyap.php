<?php

include 'baglanti.php';


$sql="select * from bloklar_alti where blokindex=".$_GET[blokid];
$sorgula=mysqli_query($connection,$sql);

$sayi=mysqli_num_rows($sorgula)+1;

mysqli_query($connection,"insert into bloklar_alti values(null,$_GET[id],$_GET[blokid],'$sayi')");

echo "OK";

?>