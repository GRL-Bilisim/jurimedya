<?php
 header("Access-Control-Allow-Origin: *");
include 'baglanti.php';


$sql="select * from bloklar_alti where blokindex=".$_GET[blokid];
$sorgula=mysqli_query($connection,$sql);

$sayi=mysqli_num_rows($sorgula)+1;


if ($_GET[id]!='')
{

mysqli_query($connection,"insert into bloklar_alti(altindex,alanindex,blokindex,sirasi)  values(null,$_GET[id],$_GET[blokid],'$sayi')");
}

if ($_GET[id]=='')
{
    
   	$sql="select * from formalanlari where form_index=".$_GET[designid]." order by alansirasi";
											$sorgula=mysqli_query($connection,$sql);
											while($okut=mysqli_fetch_assoc($sorgula))
											{

mysqli_query($connection,"insert into bloklar_alti(altindex,alanindex,blokindex,sirasi) values(null,$okut[alan_index],$_GET[blokid],'$sayi')");
}
}


echo "OK";

?>