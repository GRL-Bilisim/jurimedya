<?php


ob_start();


ini_set('display_errors', 0);

error_reporting(E_ERROR | E_WARNING | E_PARSE); 


if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
}


date_default_timezone_set("Turkey");



$zaman=date("H:i:s");

include 'baglanti.php';

if($_GET[userid]!=''){
    $ev = mysqli_query($connection,"select * from bildirimler where bildirimsahibi='".$_GET[userid]."' and (okundu='' or isnull(okundu) ) ");
    while($cex = mysqli_fetch_assoc($ev)){
         $bid = $cex[index_bildirimler];
        
        $mesaj = iconv( "ISO-8859-9","UTF-8",$cex[bildirimmetni]);
    }
    echo $mesaj;
    
    $update = mysqli_query($connection,"update bildirimler set okundu='alertgosterildi',okunmazamani='$zaman' where index_bildirimler='$bid'  ");
}




?>