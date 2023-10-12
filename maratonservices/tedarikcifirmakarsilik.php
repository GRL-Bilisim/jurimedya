<?php


include 'baglanti.php';


$sql="select * from tedarikciurunkartlari left join malzemeler on malzemeler.index_malzemeler=tedarikciurunkartlari.hammadde left join talepicerigi on talepicerigi.talepedilen=malzemeler.index_malzemeler where tedarikciadi='".$_GET['firma']."' and index_talepicerigi='".$_GET['ureticikodu']."'";
$sorgula=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorgula))
{
    echo $okut['urunadi'];
}



?>