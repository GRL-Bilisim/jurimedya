<?php
 header("Access-Control-Allow-Origin: *");

include 'baglanti.php';


$sql="select * from firma_karsiliklari left join malzemeler on malzemeler.index_malzemeler=firma_karsiliklari.malzemeid where firmaid='".$_GET[firma]."' and karsilik_no='".$_GET[ureticikodu]."'";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    
    echo $okut[malzemekodu];
}



?>