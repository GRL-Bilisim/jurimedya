<?php 
include 'baglanti.php';

$talepkid = $_GET[talepkid];
$aciklama = $_GET[aciklama];
if($talepkid!=''){

        $my = mysqli_query($connection,"update talepicerigi set durumu='".iconv("UTF-8","ISO-8859-9","Reddedildi")."', rednedeni = '".iconv("UTF-8","ISO-8859-9",$aciklama)."'  where index_talepicerigi='$talepkid' ");
    
          echo 'OK';

            
    
}






?>