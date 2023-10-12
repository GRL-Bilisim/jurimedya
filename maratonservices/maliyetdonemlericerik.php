<?php 
include 'baglanti.php';

$sql = "select * from maliyetdonemleri where index_maliyetdonemleri='".$_GET[donemid]."' ";
$sorgula = mysqli_query($connection,$sql);

while($oku=mysqli_fetch_assoc($sorgula)){
    
    $uretimkapasite = $oku[uretimkapasite];
    $giderkatsayi = $oku[giderkatsayi];
    $kapasitehesap = $oku[kapasitehesap];

    echo $uretimkapasite.'-'.$giderkatsayi.'-'.$kapasitehesap;
  
}
?>