<?php

 header("Access-Control-Allow-Origin: *");

ob_start();

if (!isset($_SESSION)) {
    @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


include 'baglanti.php';


  function sifre_uret($uzunluk) {
              $karakterler = "abcdefghijklmnopqrstuvwxyz1234567890";
              $karakter_sayi = strlen($karakterler);
              for ($ras = 0; $ras <$uzunluk; $ras++) {

                  $rakam_ver = rand(0,$karakter_sayi-1);

                  $sifre_ver .= $karakterler[$rakam_ver];
              }
              return $sifre_ver;


 


          }  


if ($_GET[ids]!='')
{
  
 $dcx = $_GET[ids];

$sql="select * from teklifler where index_teklifler=".$dcx;

$sorbana=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorbana))
{
 
   $sqlz = "select * from teklif_kalemleri where sip_id =".$okut[index_teklifler];
   $okuts = mysqli_query($connection,$sqlz);
   while($cal=mysqli_fetch_assoc($okuts)){
       $projekodu = $cal[ch_kodu];
       $birimfiyat = $cal[fiyat];
   }

$tokenid=sifre_uret(6);
$ekle = mysqli_query($connection,"insert into satinalma(satinalmakodu,siparisturu,aciklamasi,siparismiktari,siparisbirimi,siparisdurumu,birimfiyat,talepid,tsbfno,projekodu,fiyatbirimi,hesaplama) values('".$tokenid."','Malzeme','$projekodu','".$okut[toplam_miktar]."','Adet','Teklif Bekliyor','$birimfiyat','','','".$projekodu."','".$okut[kur_tipi]."','".$okut[odeme_sekli]."')");   

}
   
}

echo $tokenid;



?>