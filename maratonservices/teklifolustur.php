<?php

include 'baglanti.php';


ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}



$sql="delete from satinalma_teklif_icerigi where sip_id='-".$_SESSION[user_id]."'";
$sorgula=mysqli_query($connection,$sql);


if ($_GET[secilenler]!='')
{
    
    
 
    $pizza  = $_GET[secilenler];
$pieces = explode(",", $pizza);


for($i=0;$i<=count($pieces);$i++)
{
    
$sql="select * from talepicerigi where index_talepicerigi=".$pieces[$i];

$sorbana=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorbana))
{
 
 mysqli_query($connection,"insert into satinalma_teklif_icerigi(baglantilitalep,ch_kodu,miktar,birimi,kalemturu,sip_id,durum) values('".$okut[index_talepicerigi]."','".$okut[talepedilen]."','".$okut[talepmiktari]."','".$okut[birimi]."','Malzeme','-".$_SESSION[user_id]."','Teklif Bekliyor')");   
    
}
    
    
}
}


echo "OK";



?>