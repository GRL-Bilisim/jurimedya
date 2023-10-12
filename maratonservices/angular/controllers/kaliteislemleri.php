<?php 

include 'pdo_baglanti.php';
date_default_timezone_set("Turkey");

$zaman=date("H:i:s");

$tarih=date("Y-m-d");

if($_GET['page_id']=='kaliteonayla'){
    $formid = $_GET['formid'];
    $recordid=$_GET['recordid'];
    $userid = $_GET['userid'];


    $scl = $db->prepare("update sarjgirdileri set sonduzenlemetarihi='$tarih',sonduzenleyen='$userid',kaliteonay='OK' where index_sarjgirdileri = ? ");
$scl->execute([$recordid]);
 $countyes= $scl->rowCount();
if($countyes>0){
    echo "[{\"status\":\"Success\"}]";
}

}


if($_GET['page_id']=='kalitereddet'){

    $formid = $_GET['formid'];
    $recordid=$_GET['recordid'];
    $userid = $_GET['userid'];
    $rednedeni = iconv("ISO-8859-9","UTF-8",$_GET['rednedeni']);

    $svl = $db->prepare("update sarjgirdileri set sonduzenlemetarihi='$tarih',sonduzenleyen='$userid',kaliteonay='NO',rednedeni = '$rednedeni' where index_sarjgirdileri = ? ");
    $svl->execute([$recordid]);
     $countyes= $svl->rowCount();
    if($countyes>0){
        echo "[{\"status\":\"Success\"}]";
    }
}

?>