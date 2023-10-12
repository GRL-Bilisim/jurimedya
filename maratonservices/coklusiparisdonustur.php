<?php


ob_start();

if (!isset($_SESSION)) {
        @session_name("asalyapi");

  @session_start();
  $_SESSION["urunsayisi"]="1";
}


include 'baglanti.php';



if ($_GET[ids]!='')
{
  

$secilenler = $_GET[ids];
$secpar = explode(',',$secilenler);



for($i=0;$i<count($secpar);$i++)
{

    if($secpar[$i]>0){
        $sql="select * from teklifler where index_teklifler=".$secpar[$i];
echo $sql;
$sorbana=mysqli_query($connection,$sql);
while($okut=mysqli_fetch_assoc($sorbana))
{
 
   $sqlz = "select * from teklif_kalemleri where sip_id =".$okut[index_teklifler];

   $okuts = mysqli_query($connection,$sqlz);
   while($cal=mysqli_fetch_assoc($okuts)){
       $projekodu = $cal[ch_kodu];
       $birimfiyat = $cal[fiyat];
       $siparmiktar = $cal[kesme_isemri_gelecek_miktar];
   }


//echo "insert into satinalma(satinalmakodu,siparisturu,aciklamasi,siparismiktari,siparisbirimi,siparisdurumu,birimfiyat,talepid,tsbfno,projekodu,fiyatbirimi,hesaplama) values('-".$_SESSION[user_id]."','Malzeme','$projekodu','$siparmiktar','ADET','Teklif Bekliyor','$birimfiyat','','','".$projekodu."','".$okut[kur_tipi]."','".$okut[odeme_sekli]."')";

$ekle = mysqli_query($connection,"insert into satinalma(satinalmakodu,siparisturu,aciklamasi,siparismiktari,siparisbirimi,siparisdurumu,birimfiyat,talepid,tsbfno,projekodu,fiyatbirimi,hesaplama) values('-".$_SESSION[user_id]."','Malzeme','$projekodu','$siparmiktar','ADET','Teklif Bekliyor','$birimfiyat','','','".$projekodu."','".$okut[kur_tipi]."','".$okut[odeme_sekli]."')");   

}
    }
    
    
}





   
}

echo "OK";



?>