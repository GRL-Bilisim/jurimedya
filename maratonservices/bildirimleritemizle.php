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

if($_GET[uid]!=''){
    
    $update = mysqli_query($connection,"update bildirimler set okundu='e',okunmazamani='$zaman' where bildirimsahibi='".$_GET[uid]."'  ");
    
    echo 'OK';
}





?>