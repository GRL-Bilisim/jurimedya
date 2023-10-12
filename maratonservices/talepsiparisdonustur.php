<?php 

ob_start();
if (!isset($_SESSION)) {
    @session_name("asalyapi");
  @session_start();
  
  $_SESSION["urunsayisi"]="1";
}

include 'baglanti.php';

if($_GET[talepid]!=''){
    
    $qq = mysqli_query($connection,"select * from ictalepler where index_ictalepler='".$_GET[talepid]."' ");

    while($la = mysqli_fetch_assoc($qq)){
        
        $taleptarihi = $la[taleptarihi];
        
        $qus = mysqli_query($connection,"select * from talepicerigi where talepno='".$_GET[talepid]."' and durumu like '%Onayland%'  ");
    
        while($xz = mysqli_fetch_assoc($qus)){
            
            $su = mysqli_query($connection,"select * from malzemetedarikcileri where ureticikodu like '%".$xz[uretici_kodu]."%' ");
         
            while($cali = mysqli_fetch_assoc($su)){
                $fiyatbirimi = $cali[fiyatbirimi];
                $birimfiyat = $cali[birimfiyat];
                $tedarikci = $cali[tedarikci];
            
            }

            $talepedilen = $xz[talepedilen];
            $ureticikodu = $xz[uretici_kodu];
            $talepmiktari = $xz[talepmiktari];
            $birimi = $xz[birimi];
            $toplammiktar = $xz[toplammiktar];
            $ihtiyacadet = $xz[ihtiyacadet];
            
           $ekle = mysqli_query($connection,"insert into satinalma(satinalmakodu,siparisturu,aciklamasi,siparismiktari,siparisbirimi,siparisdurumu,birimfiyat,talepid,tsbfno,projekodu,fiyatbirimi,sipariskg) values('-".$_SESSION[user_id]."','Hammadde','$ureticikodu','$talepmiktari','$birimi','Kabul Edildi','$birimfiyat','','','".$projekodu."','$fiyatbirimi','$toplammiktar')");   


        echo '|'.$tedarikci.'|'.$taleptarihi;
        
        }
        
    }
    
    
    
}

?>