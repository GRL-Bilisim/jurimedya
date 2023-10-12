<?php


ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';


$sql="delete from satinalma where satinalmakodu='-".$_SESSION[user_id]."'";
$sorgula=mysqli_query($connection,$sql);

if ($_GET[ids]!='')
{
  
 $dcx = $_GET[ids];

    //durum='Kabul Edildi' and
$sql="select * from satinalma_teklif_icerigi where durum='Kabul Edildi' and  sip_id=".$dcx;

$sorbana=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorbana))
{
 
   $sqlz = "select * from talepicerigi where index_talepicerigi =".$okut[baglantilitalep];
   $okuts = mysqli_query($connection,$sqlz);
   while($cal=mysqli_fetch_assoc($okuts)){
       $tbfno = $cal[tsbfno];
       $projekodu = $cal[projekodu];
   }

$ekle = mysqli_query($connection,"insert into satinalma(satinalmakodu,siparisturu,aciklamasi,siparismiktari,siparisbirimi,siparisdurumu,birimfiyat,talepid,tsbfno,projekodu,fiyatbirimi,hesaplama) values('-".$_SESSION[user_id]."','".$okut[kalemturu]."','".$okut[ch_kodu]."','".$okut[miktar]."','".$okut[birimi]."','".iconv("UTF-8", "ISO-8859-9",'Teklif Alındı')."','".$okut[fiyat]."','".$okut[baglantilitalep]."','".$tbfno."','".$projekodu."','".$okut[parabirimi]."','".$okut[fiyatturu]."')");   

//echo "insert into satinalma(satinalmakodu,siparisturu,aciklamasi,siparismiktari,siparisbirimi,siparisdurumu,birimfiyat,talepid,tsbfno,projekodu,fiyatbirimi,hesaplama) values('-".$_SESSION[user_id]."','".$okut[kalemturu]."','".$okut[ch_kodu]."','".$okut[miktar]."','".$okut[birimi]."','Bekliyor','".$okut[fiyat]."','".$okut[baglantilitalep]."','".$tbfno."','".$projekodu."','".$okut[fiyatbirimi]."','".$okut[fiyatturu]."')";
}
    
    
}

echo "OK";



?>